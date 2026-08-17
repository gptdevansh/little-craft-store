/** Global site configuration */
export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  currency: { code: string; symbol: string };
  phone: string;
  whatsappUrl: string;
  instagramHandle: string;
  instagramUrl: string;
  marketplaces: Array<{
    name: string;
    url: string;
    icon: string;
  }>;
}

/** Navigation link */
export interface NavLink {
  id: string;
  label: string;
  href: string;
}

/** Footer link group */
export interface FooterLinkGroup {
  id: string;
  title: string;
  links: NavLink[];
}
