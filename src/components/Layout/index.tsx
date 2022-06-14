import type { NextPage } from 'next';
import { LayoutSection, LayoutAnchor } from './styles';

type ILayout = {
  style?: any;
  children: React.ReactNode;
  id: string;
};

const Layout: NextPage<ILayout> = ({ children, id, style }) => {
  return (
    <>
      <LayoutSection style={style}>
        <LayoutAnchor id={id} />
        {children}
      </LayoutSection>
    </>
  );
};

export default Layout;
