import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Agentes"
    description="Nosotros te brindamos un servicio personalizado y de calidad para ayudarte con tu búsqueda inmobiliaria. Contáctanos."
  >
    <VerticalFeatureRow
      title="Privacidad"
      description="Aviso de Privacidad”. Usted, por el hecho de enviar información por medio de esta dirección de correo electrónico, autoriza a la Inmobiliaria a administrar sus datos personales y a transferir los mismos a terceros cuando sea estrictamente necesario para otorgarle nuestros servicios. Usted podrá ejercer los derechos de acceso, rectificación, cancelación, oposición, divulgación y limitación de uso, mediante escrito dirigido al Responsable de Protección de Datos Personales, en el domicilio de la Inmobiliaria o mediante correo electrónico {pendiente}} Cualquier modificación que se realice al presente Aviso de Privacidad, será notificada a través de nuestra página de Internet: www.wilsonbienesraices.com"
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Balances"
      description="Implementamos las mejores herramientas para unificar interés de las partes"
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Misión y Visión"
      description="Brindar un servicio de asesoría inmobiliaria personalizada orientada a cumplir con las exigencias de nuestros clientes. Trabajamos con ética profesional, con honestidad y discreción en todas las etapas de la venta, compra o alquiler. Nos basamos en nuestra experiencia y capacitación en el sector. Ser la mejor alternativa para quienes quieren la ayuda de un profesional inmobiliario, desde una relación cercana y resolutiva, ofreciendo las propuestas más innovadoras. Que nuestros clientes se sientan plenamente acompañados y asesorados durante todo el proceso de compra de una propiedad"
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
