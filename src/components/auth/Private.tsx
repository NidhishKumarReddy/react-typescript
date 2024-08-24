import { Login } from "./Login";
import { ProfileProps } from "./Profile";

export type PrivateProps = {
  isLoggedIn: boolean;
  component: React.ComponentType<ProfileProps>;
};

export const Private = ({ isLoggedIn, component: Component }: PrivateProps) => {
  if (isLoggedIn) {
    return <Component name="Nidhish" />;
  } else {
    return <Login />;
  }
};
