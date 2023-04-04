import { ConfigProvider, theme } from "antd";
import { useAppSelector } from "@/hooks/useRedux";

import AppRoutes from "./routes";

const App = () => {
  const configStore = useAppSelector((store) => store.config);

  return (
    <ConfigProvider
      theme={{
        algorithm: configStore.isDark
          ? theme.darkAlgorithm
          : theme.defaultAlgorithm,
      }}
    >
      <AppRoutes />
    </ConfigProvider>
  );
};

export default App;
