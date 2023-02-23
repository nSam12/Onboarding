import * as LoginActionCreator from "./LoginActionCreator";
import * as LogoutActionCreator from "./LogoutActionCreator";
import * as StagesActionCreator from "./StagesActionCreator";

export default {
    ...LoginActionCreator,
    ...LogoutActionCreator,
    ...StagesActionCreator,
};
