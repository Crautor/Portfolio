import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

import { ImageResponse } from 'next/og';

import { profile } from '@/content/profile';
import { featuredProjects } from '@/content/projects';

// The link preview image (og:image). It is rendered at build time from the
// site's own content: the name, the headline roles and the live sites.
export const dynamic = 'force-static';

const WIDTH = 1200;
const HEIGHT = 630;

const COLORS = {
  ink: '#0b1210',
  surface: '#111a17',
  line: '#22302a',
  mist: '#e4eee9',
  accent: '#34d399',
};

// Screenshots stacked back to front. `project` is the index in
// featuredProjects, so the first project gets the front card.
const CARDS = [
  { project: 1, left: 598, top: 104, width: 330, rotate: -8 },
  { project: 2, left: 826, top: 122, width: 340, rotate: 7 },
  { project: 0, left: 694, top: 268, width: 400, rotate: -3 },
];

const SHOT_RATIO = 900 / 1440;
const BAR = 26;

const asset = (path) => readFile(join(process.cwd(), 'src/assets', path));

// next/og reads only PNG and JPEG, and writes only PNG, which weighs about
// 400 KB with these screenshots; WhatsApp is known to drop previews over
// 300 KB. The Squoosh codecs bundled with Next.js 14 convert both ways.
// Next.js 15 dropped them: switch toJpeg to sharp when upgrading.
// They are loaded with Node's own require, because bundling them breaks the
// paths they use to find their .wasm files.
// eslint-disable-next-line no-undef
const { decodeBuffer, encodeJpeg, resize } = __non_webpack_require__('next/dist/server/lib/squoosh/impl');

async function toJpeg(buffer, width) {
  let image = await decodeBuffer(buffer);
  if (width) image = await resize({ image, width, height: 0 });
  return encodeJpeg(image, { quality: 85 });
}

// Screenshots live in src/assets/projects, named after the project id.
async function screenshot(project) {
  const jpeg = await toJpeg(await asset(`projects/${project.id}.webp`), 800);
  return `data:image/jpeg;base64,${jpeg.toString('base64')}`;
}

// The same browser window as BrowserFrame on the site. The renderer misplaces
// an image inside a rotated box that clips it (overflow: hidden), so the
// screenshot is a separate element on top of the frame, turned by the same
// angle and rounding its own bottom corners.
function cardElements({ src, left, top, width, rotate }, key) {
  const imageWidth = width - 2;
  const imageHeight = Math.round(imageWidth * SHOT_RATIO);
  const height = imageHeight + BAR + 2;

  // Unrotated, the screenshot's center sits (BAR + 2) / 2 px below the
  // frame's center. Turn that offset with the frame.
  const angle = (rotate * Math.PI) / 180;
  const offset = (BAR + 2) / 2;
  const centerX = left + width / 2 - offset * Math.sin(angle);
  const centerY = top + height / 2 + offset * Math.cos(angle);

  return [
    <div
      key={`${key}-frame`}
      style={{
        position: 'absolute',
        left,
        top,
        width,
        height,
        display: 'flex',
        borderRadius: 14,
        border: `1px solid ${COLORS.line}`,
        backgroundColor: COLORS.surface,
        boxShadow: '0 40px 80px -32px rgba(0, 0, 0, 0.75)',
        transform: `rotate(${rotate}deg)`,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          height: BAR,
          paddingLeft: 12,
          borderBottom: `1px solid ${COLORS.line}`,
        }}
      >
        {[0, 1, 2].map((dot) => (
          <div
            key={dot}
            style={{ width: 8, height: 8, marginRight: 6, borderRadius: 4, backgroundColor: COLORS.line }}
          />
        ))}
      </div>
    </div>,
    <img
      key={`${key}-shot`}
      src={src}
      width={imageWidth}
      height={imageHeight}
      alt=''
      style={{
        position: 'absolute',
        left: centerX - imageWidth / 2,
        top: centerY - imageHeight / 2,
        borderBottomLeftRadius: 13,
        borderBottomRightRadius: 13,
        transform: `rotate(${rotate}deg)`,
      }}
    />,
  ];
}

export async function GET() {
  const [narrow, regular, text, ...shots] = await Promise.all([
    asset('fonts/BricolageGrotesque-ExtraBold-Narrow.ttf'),
    asset('fonts/BricolageGrotesque-ExtraBold.ttf'),
    asset('fonts/InstrumentSans-Medium.ttf'),
    ...CARDS.map((card) => screenshot(featuredProjects[card.project])),
  ]);

  const [firstName, ...lastNames] = profile.name.split(' ');

  const png = await new ImageResponse(
    (
      <div
        style={{
          position: 'relative',
          display: 'flex',
          width: '100%',
          height: '100%',
          backgroundColor: COLORS.ink,
          color: COLORS.mist,
        }}
      >
        {/* Glow and orbit lines behind the screenshots */}
        <div
          style={{
            position: 'absolute',
            left: 520,
            top: -40,
            width: 760,
            height: 720,
            backgroundImage: 'radial-gradient(circle, rgba(52, 211, 153, 0.2) 0%, rgba(52, 211, 153, 0) 65%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: 600,
            top: -250,
            width: 1000,
            height: 1000,
            borderRadius: 500,
            border: '1.5px solid rgba(52, 211, 153, 0.16)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: 700,
            top: 360,
            width: 900,
            height: 900,
            borderRadius: 450,
            border: '1.5px solid rgba(52, 211, 153, 0.1)',
          }}
        />

        {CARDS.flatMap((card, index) => cardElements({ ...card, src: shots[index] }, card.project))}

        <div
          style={{
            position: 'absolute',
            left: 72,
            top: 60,
            display: 'flex',
            fontFamily: 'Bricolage',
            fontWeight: 800,
            fontSize: 44,
            letterSpacing: -1,
          }}
        >
          vd<span style={{ color: COLORS.accent }}>.</span>
        </div>

        <div
          style={{
            position: 'absolute',
            left: 68,
            top: 168,
            display: 'flex',
            flexDirection: 'column',
            fontFamily: 'Bricolage Narrow',
            fontWeight: 800,
            fontSize: 160,
            lineHeight: 0.86,
            letterSpacing: -3.5,
          }}
        >
          <div style={{ display: 'flex' }}>{firstName}</div>
          <div style={{ display: 'flex' }}>
            {lastNames.join(' ')}
            <span style={{ color: COLORS.accent }}>.</span>
          </div>
        </div>

        <div
          style={{
            position: 'absolute',
            left: 72,
            top: 470,
            display: 'flex',
            alignItems: 'center',
            fontFamily: 'Instrument Sans',
            fontWeight: 500,
            fontSize: 32,
          }}
        >
          {profile.headline.map((role, index) => (
            <div key={role} style={{ display: 'flex', alignItems: 'center' }}>
              {index > 0 ? (
                <div
                  style={{
                    width: 10,
                    height: 10,
                    margin: '0 18px',
                    borderRadius: 5,
                    backgroundColor: COLORS.accent,
                  }}
                />
              ) : null}
              {role}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      width: WIDTH,
      height: HEIGHT,
      fonts: [
        { name: 'Bricolage Narrow', data: narrow, weight: 800, style: 'normal' },
        { name: 'Bricolage', data: regular, weight: 800, style: 'normal' },
        { name: 'Instrument Sans', data: text, weight: 500, style: 'normal' },
      ],
    },
  ).arrayBuffer();

  return new Response(await toJpeg(Buffer.from(png)), {
    headers: { 'Content-Type': 'image/jpeg' },
  });
}
