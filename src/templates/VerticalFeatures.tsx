import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Balances"
    description="Implementamos las mejores herramientas para unificar interés de las partes"
  >
    <VerticalFeatureRow
      title="Misión"
      description="Brindar un servicio de asesoría inmobiliaria personalizada orientada a cumplir con las exigencias de nuestros clientes. Trabajamos con ética profesional, con honestidad y discreción en todas las etapas de la venta, compra o alquiler. Nos basamos en nuestra experiencia y capacitación en el sector."
      image="/assets/images/feature.svg"
      imageAlt="wilson bienes y raíces"
    />
    <VerticalFeatureRow
      title="Visión"
      description="Ser la mejor alternativa para quienes quieren la ayuda de un profesional inmobiliario, desde una relación cercana y resolutiva, ofreciendo las propuestas más innovadoras. Que nuestros clientes se sientan plenamente acompañados y asesorados durante todo el proceso de compra de una propiedad"
      image="/assets/images/feature2.svg"
      imageAlt="wilson bienes y raíces"
      reverse
    />
    <VerticalFeatureRow
      title="Agentes"
      description="Nosotros te brindamos un servicio personalizado y de calidad para ayudarte con tu búsqueda inmobiliaria. Contáctanos."
      image="/assets/images/feature3.svg"
      imageAlt="Wilson bienes y raíces"
    />
  </Section>
);

export { VerticalFeatures };
