import React from 'react';

import { useRouteMatch } from 'react-router-dom';

export function UseRouterMatch (Child) {
    return (props) => {
        const { path, url } = useRouteMatch();
        return <Child path={path} url={url} />;
    }
}