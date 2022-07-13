import LogoW from '../../public/assets/images/logowilson.png';
import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`text-gray-900 inline-flex items-center ${fontStyle}`}>
      <img className="logoclass" src={LogoW.src} alt="logo" />

      {AppConfig.site_name}
    </span>
  );
};

export { Logo };
