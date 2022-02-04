import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import getDisplayName from './getDisplayName';

//Prop `hash` is pushed to History API
//Child component MUST use Hisotry API to read new value
export const withRouteHashAsProp = (WrappedComponent: any) => {
    const Component = (props: { hash: string }) => {
        const history = useHistory();
        useEffect(() => {
            history.replace(props.hash);
        }, [history, props.hash]);

        return <WrappedComponent {...props} hash={undefined} />;
    };
    Component.displayName = `withRouteHash(${getDisplayName(WrappedComponent)})`;
    return Component;
};

export default withRouteHashAsProp;

history.replaceState;
