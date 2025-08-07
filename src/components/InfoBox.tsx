import { type FC, type ReactNode } from "react";

type InfoBoxProps = {
  mode: 'hint' | 'warning';
  severity?: 'low' | 'medium' | 'high';
  children: ReactNode;
}


const InfoBox: FC<InfoBoxProps> = ({mode, children, severity}) => {

  const generateInternalMarkup = () => {
    switch (mode) {
      case 'hint':
        return (
        <aside className="infobox infobox-hint">
          <p className="hint">{children}</p>
        </aside>
      );
      case 'warning':
        return (
          <aside className={`infobox infobox-warning warning--${severity}`}>
            <h2>Warning!</h2>
            <p className="warning">{children}</p>
          </aside>
      );
      default:
        return null;
    }
  }

  return (
    generateInternalMarkup()
  )
}

export default InfoBox;