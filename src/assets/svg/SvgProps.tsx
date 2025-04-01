export interface SvgProps extends React.SVGAttributes<HTMLOrSVGElement> {
    width?: number | string;
    height?: number | string;
    color?: string;
    props?: unknown;
    colors?: { primary: string; secondary: string; tertiary?: string; quaternary?: string };
  }
  