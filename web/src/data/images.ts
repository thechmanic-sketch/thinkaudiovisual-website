// AI-generated mood / service imagery (NOT for the "Our Work" portfolio — real photos only there).
import sound from '../assets/images/generated/2.1-sound.jpg';
import avScreens from '../assets/images/generated/2.2-av-screens.jpg';
import staging from '../assets/images/generated/2.3-staging.jpg';
import lighting from '../assets/images/generated/2.4-lighting.jpg';
import conferences from '../assets/images/generated/2.5-conferences.jpg';
import weddings from '../assets/images/generated/2.6-weddings.jpg';
import churches from '../assets/images/generated/2.7-churches.jpg';
import live from '../assets/images/generated/2.8-live.jpg';
import ctaBg from '../assets/images/generated/2.9-cta-bg.jpg';
import soundHero from '../assets/images/generated/3.1-sound-hero-line-array.jpg';
import soundKit from '../assets/images/generated/3.2-sound-hire-kit.jpg';
import soundFoh from '../assets/images/generated/3.3-sound-engineer-foh.jpg';
import heroEnd from '../assets/images/hero/hero-end-3.jpg';

export const img = {
  sound, avScreens, staging, lighting, conferences, weddings, churches, live, ctaBg,
  soundHero, soundKit, soundFoh, heroEnd,
};

// Real event photos (upscaled) — fine to use in heroes too.
import realBeams from '../assets/images/work/lighting--gala-light-beams.jpg';
import realStage from '../assets/images/work/staging--blue-drape-stage-and-podium.jpg';
import realGala from '../assets/images/work/conference--gala-dinner-dual-screens.jpg';
import realRunway from '../assets/images/work/live--fashion-show-runway.jpg';
import realDrums from '../assets/images/work/live--drum-kit-on-stage.jpg';
import realMics from '../assets/images/work/conference--delegate-microphones.jpg';

type S = { src: typeof sound; alt: string };
export const heroSlides: Record<string, S[]> = {
  services: [
    { src: lighting, alt: 'Fan of white and blue light beams over an event hall' },
    { src: realStage, alt: 'Blue-draped stage with podium set up by Think Audio Visual' },
    { src: avScreens, alt: 'Conference hall with two large projection screens' },
    { src: soundHero, alt: 'Outdoor stage with flown line-array speakers at dusk' },
  ],
  sound: [
    { src: soundHero, alt: 'Outdoor stage at dusk on the KZN coast with flown line-array speakers and subwoofers' },
    { src: soundFoh, alt: 'Sound engineer at a digital mixing console during a live event' },
    { src: sound, alt: 'Professional mixing console in a flight case' },
    { src: realDrums, alt: 'Drum kit and microphones on stage at a Think AV live event' },
  ],
  'projector-screen-hire-durban': [
    { src: avScreens, alt: 'Conference hall with two large projection screens and blue and green uplighting' },
    { src: conferences, alt: 'Conference hall with three large screens and a speaker at a lectern' },
    { src: realGala, alt: 'Gala dinner with two presentation screens set up by Think AV' },
  ],
  'stage-hire-durban': [
    { src: staging, alt: 'Low black event stage with podium, white flowers and blue drapes' },
    { src: realStage, alt: 'Blue-draped stage and podium at a Think AV event' },
    { src: realRunway, alt: 'Fashion show runway stage built by Think AV' },
  ],
  'event-lighting-hire-durban': [
    { src: lighting, alt: 'Fan of white and blue moving-head light beams over cocktail tables' },
    { src: realBeams, alt: 'Light beams at a gala event lit by Think AV' },
    { src: live, alt: 'Concert stage with violet and white lighting over a drum kit' },
  ],
  about: [
    { src: realStage, alt: 'Stage with podium and blue drapes set up by Think AV' },
    { src: soundFoh, alt: 'Sound engineer mixing a live event' },
    { src: realMics, alt: 'Conference delegate microphones installed by Think AV' },
  ],
  work: [
    { src: realBeams, alt: 'Light beams at a gala event' },
    { src: realRunway, alt: 'Fashion show runway' },
    { src: realGala, alt: 'Gala dinner with dual screens' },
  ],
  contact: [
    { src: soundKit, alt: 'Sound hire kit with PA speakers, subwoofers, mixer and microphones' },
    { src: ctaBg, alt: '' },
  ],
};

export const serviceImage: Record<string, { src: typeof sound; alt: string }> = {
  'sound-hire-durban': { src: sound, alt: 'Professional mixing console in a flight case with line-array speakers and green lasers behind' },
  'projector-screen-hire-durban': { src: avScreens, alt: 'Conference hall with two large projection screens and blue and green uplighting' },
  'stage-hire-durban': { src: staging, alt: 'Low black event stage with podium, white flowers and blue drapes' },
  'event-lighting-hire-durban': { src: lighting, alt: 'Fan of white and blue moving-head light beams over cocktail tables' },
};
