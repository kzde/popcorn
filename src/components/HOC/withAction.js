// @flow
import * as React from "react";

function withAction<Config:{}>(Component:React.AbstractComponent<Config>): React.AbstractComponent<$Diff<Config, {foo?: number}>>{
    return function WrappedComponent(
        props: $Diff<Config, {foo?: number}>
    ){
        return <Component {...props} foo={42} />
    }
};

export default withAction;
