import React from 'react';

const WithLogging = (WrappedComponent) => {
    class WithLoggingComponent extends React.Component{
        componentDidMount() {
            console.log(`Component ${WrappedComponent.displayName || WrappedComponent.name || 'Component'} is mounted`);
        }

        componentWillUnmount() {
            console.log(`Component ${WrappedComponent.displayName || WrappedComponent.name || 'Component'} is going to unmount`);
        }

        render() {
            return <WrappedComponent {...this.props} />
        }
    }
    WithLoggingComponent.displayName = `WithLogging(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

    return WithLoggingComponent;
}

export default WithLogging;