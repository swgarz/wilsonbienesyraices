import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Privacidad"
      subtitle="Aviso de Privacidad”. Usted, por el hecho de enviar información por medio de esta dirección de correo electrónico, autoriza a la Inmobiliaria a administrar sus datos personales y a transferir los mismos a terceros cuando sea estrictamente necesario para otorgarle nuestros servicios. Usted podrá ejercer los derechos de acceso, rectificación, cancelación, oposición, divulgación y limitación de uso, mediante escrito dirigido al Responsable de Protección de Datos Personales, en el domicilio de la Inmobiliaria o mediante correo electrónico {pendiente}} Cualquier modificación que se realice al presente Aviso de Privacidad, será notificada a través de nuestra página de Internet: www.wilsonbienesraices.com"
      button={
        <Link href="">
          <a>
            <Button>Facebook</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
