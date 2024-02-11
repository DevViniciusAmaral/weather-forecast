import { StackParamList } from "src/application/routes/StackParamList";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends StackParamList {}
  }
}
