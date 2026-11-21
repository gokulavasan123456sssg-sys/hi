# GOKULAVASAN — CINEMATIC MASS PORTFOLIO WEBSITE

> *"Turning Every Frame Into A Story."*

A world-class, premium, animation-heavy filmmaker portfolio built for **GOKULAVASAN** — Video Editor, Cinematographer, Photographer, and Visual Effects Artist.

Designed to evoke the grand scale, glowing typography, and electrifying energy of a **Tamil cinema title introduction / mass-hero entrance**, merged with a clean, high-performance filmmaker portfolio and private CMS dashboard.

---

## 🎬 1. Creative Direction & Visual Identity

- **Theme**: Tamil Cinema Mass Title Sequence & Cinematic Showcase.
- **Palette**:
  - `Pure Black`: `#050505`
  - `Deep Red`: `#B50016`
  - `Fiery Red`: `#FF2020`
  - `Burnt Orange`: `#FF5A00`
  - `Golden Orange`: `#FF9B24`
  - `White`: `#FFFFFF`
- **Visual FX**:
  - SVG Celluloid Film Grain overlay (`FilmGrain.tsx`).
  - 60fps Ambient Embers & Smoke Particle Canvas (`ParticleCanvas.tsx`).
  - Web Audio API Cinematic Synthesizer (`CinematicAudioEngine` with deep sub-bass braams, rising sizzles, footstep thuds, and mechanical clicks).
  - Custom cinematic glowing crosshair / aperture cursor with responsive mobile fallbacks.

---

## 🚶‍♂️ 2. Hero Mass Entrance Sequence

The opening section features an animation sequence:
1. **Black Screen Opening**: Subtle rising tension and ambient spark particles.
2. **Glowing Name Reveal**: `GOKULAVASAN` reveals letter-by-letter with a fiery red-to-orange glow and sound-ready synthesizer risers.
3. **Hero Walk**: Inspired by the swagger of classic Tamil mass hero entrances. Features Gokulavasan's actual high-resolution portrait (`Fiery Orange-Red Shirt Portrait`), preserving face, hairstyle, glasses, and beard identity with camera push-in and deep rhythmic bass footsteps.
4. **Transition to Homepage**: Reveals the profession titles, tagline, and CTA buttons (*Explore My Work*, *Download Resume*, *Contact Me*).

---

## 🗂️ 3. Google Drive Media Mapping

All media assets from Gokulavasan's Google Drive folder (`1ryjI4XRj1CSMRETBAB1zZkC4FvsoGCWm`) have been categorized:

| Category | Media Items & Filenames | Google Drive ID |
|---|---|---|
| **Profile Image** | `Fiery Orange-Red Shirt Portrait.png`, `application_photo_200x230.jpg` | `1B3XCV1CXiIPRmADsqAWyPNoP-6apyhR0` |
| **Resume** | `Gokulavasan - Video Editor, Photographer & Cinematographer Resume (1).pdf` | `1mJ_d92Ojkk5z0z-htAeRHBubtQ7_YeMJ` |
| **Wedding Films** | `wedding works.mp4` | `1Hd40PdkoocUmznK9GN7Mdzl7IA7pJh2v` |
| **Video Editing** | `03.mp4`, `AI.mp4`, `Naveena Vazhipari Alaparaigal...mp4`, `vidssave.com நீ வீட்டுக்கு தனியா போறியா...mp4`, `vidssave.com ரூல்ஸ் எங்களுக்கு கிடையாது...mp4` | `1CW2OL9eV3On5H07rC_VOnPT7w0W2CbFV`, `1QmQ0uRYX9nSTgRKkaSWh_bH_-_deiT1W`, `1T5aixKuorgdprZo-eC56B0vpUSvK0mLh` |
| **Cinematography** | `video.mp4` (Cinematography Master Reel) | `18waMj-y5GHwpFS_wv3_ZMpWrvsRaDNqT` |
| **Photography** | Rameshwaram Pamban Bridge (`pamban_bridge.webp`), Kanyakumari Edge of India (`edge_of_india_1.jpg`, `edge_of_india_2.jpg`), Suchindram Thanumalayan Temple (`suchindram_temple_1.jpg`, `2`, `3`), Sunset Silhouette (`golden_hour_silhouette.jpeg`), Padmanabhapuram Palace (`wooden_palace.jpg`), Vivekananda Rock Memorial (`vivekananda_rock.jpg`) | `1satVp5qiVEdI2OPBmCnWJieo7BNPMGEO`, `1Td_ODzWGGTSnFNLnMTjFgZraY18XYQiZ`, `15pd9_kKPBbonvj12NqgQd5QEXII_1KC6`, `1rmZUhXelm0_KXzg6Mk2gbYXjy913yFEs`, etc. |
| **VFX & 3D** | `SHOW REEL.mp4` (VFX Master Reel), `3D.mp4` (Maya Simulation) | `1CY9wlPKBDT6fl6pGnTpCU11W3ExTc9el`, `15ABeF66_XLrFFq9LnL7QXQIQJP_tf0oD` |

---

## 🔐 4. Private Admin Dashboard (`/admin`)

Manage and update portfolio content without touching code:
- **Route**: Append `#admin` or `/admin` to the website URL or click the shield button in the navbar/footer.
- **Passkey**: `gokul2026` (or `admin`)
- **Features**:
  - **Overview**: Real-time project counts, video/photo breakdown, and database status.
  - **Projects**: Add new projects, upload thumbnails, change categories, set video links/embeds, edit titles & descriptions, and delete projects.
  - **Images**: Browse and manage full-resolution photography assets.
  - **Videos**: Manage video editing showcases and wedding films.
  - **Categories**: Inspect projects per domain.
  - **Profile**: Update full name, titles, tagline, about heading, and upload new portraits.
  - **Skills**: Add or update professional competencies across all four pillars.
  - **Resume**: Update resume PDF link or Google Drive view URL.
  - **Contact**: Update phone number, email address, WhatsApp link, and social profiles.
  - **Settings**: Check Supabase database connectivity, or perform a 1-click factory reset to the original Google Drive media defaults.

---

## ⚡ 5. Tech Stack & Architecture

- **Frontend**: React 19, TypeScript, Vite 6
- **Styling**: Tailwind CSS with custom cinematic design system
- **Icons**: Lucide React
- **Audio Engine**: Web Audio API (Native browser synthesizer)
- **Database & Storage**: Dual Architecture
  - **Zero-Config LocalStorage Sync**: Works immediately out of the box with zero external dependencies.
  - **Supabase Integration**: Ready for cloud database & storage bucket syncing via environment variables.

---

## 🚀 6. Local Setup Instructions

```powershell
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev
# -> Opens http://localhost:5173

# 3. Build for production
npm run build
# -> Production bundle output in /dist
```

---

## 🌐 7. Supabase Database Setup (Optional)

1. Create a project at [supabase.com](https://supabase.com).
2. Open the **SQL Editor** in Supabase and paste the contents of `supabase_schema.sql`.
3. Copy your **Project URL** and **Anon Key** into `.env`:
   ```env
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key
   ```
4. Run `npm run build` or deploy to your hosting provider.
