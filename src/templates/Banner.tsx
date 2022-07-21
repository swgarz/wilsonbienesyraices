import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Wilson Bienes Raíces"
      subtitle="Encuéntranos en Facebook"
      button={
        <Link href="https://www.facebook.com/wilsonbienesraicesmx">
          <a>
            <Button>Facebook</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
