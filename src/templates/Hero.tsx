import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="">
            <a>Unete</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>55-21-41-72-97</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {
              'Los bienes raíces es aquello que por su naturaleza esta ligado al suelo y no puede trasladarse, denominados inmuebles.\n'
            }
            <span className="text-primary-500">Wilson Bienes y Raices</span>
          </>
        }
        description="Estrategias modernas de compra y venta."
        button={
          <Link href="">
            <a>
              <Button xl>Contacto</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
