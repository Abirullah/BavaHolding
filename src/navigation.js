export const ROUTES = {
  home: "/",
  contact: "/contact",
  privacy: "/privacy-policy",
};

export const SECTION_IDS = {
  home: "home",
  about: "about",
  services: "services",
  caseStudy: "case-study",
};

export const NAVIGATION_EVENT = "app:navigate";

export const NAV_ITEMS = [
  { label: "Home", sectionId: SECTION_IDS.home },
  { label: "About Us", sectionId: SECTION_IDS.about },
  { label: "Service", sectionId: SECTION_IDS.services },
  { label: "Case Study", sectionId: SECTION_IDS.caseStudy },
];

export function getLocationState() {
  return {
    pathname: window.location.pathname,
    hash: window.location.hash,
  };
}

export function dispatchNavigationEvent() {
  window.dispatchEvent(new Event(NAVIGATION_EVENT));
}

export function scrollToSection(sectionId, behavior = "smooth", retries = 10) {
  const target = document.getElementById(sectionId);

  if (target) {
    target.scrollIntoView({
      behavior,
      block: "start",
    });
    return true;
  }

  if (retries > 0) {
    window.setTimeout(
      () => scrollToSection(sectionId, behavior, retries - 1),
      60
    );
  }

  return false;
}

export function navigateToPath(path) {
  const currentPath = `${window.location.pathname}${window.location.hash}`;

  if (currentPath === path) {
    if (path === ROUTES.home) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
    return;
  }

  window.history.pushState({}, "", path);
  dispatchNavigationEvent();
}

export function navigateToSection(sectionId) {
  const nextUrl =
    sectionId === SECTION_IDS.home ? ROUTES.home : `${ROUTES.home}#${sectionId}`;

  if (window.location.pathname !== ROUTES.home) {
    window.history.pushState({}, "", nextUrl);
    dispatchNavigationEvent();
    return;
  }

  const currentUrl = `${window.location.pathname}${window.location.hash}`;

  if (currentUrl !== nextUrl) {
    window.history.replaceState({}, "", nextUrl);
    dispatchNavigationEvent();
  }

  if (sectionId === SECTION_IDS.home) {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    return;
  }

  scrollToSection(sectionId);
}
