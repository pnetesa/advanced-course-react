import React, { type ReactNode, Suspense } from 'react';
import { PageError } from 'widgets/page-error';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  // eslint-disable-next-line n/handle-callback-err
  static getDerivedStateFromError(error: Error): { hasError: boolean; } {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    // You can also log the error to an error reporting service
    // eslint-disable-next-line no-console
    console.log(error, errorInfo);
  }

  render(): React.ReactNode {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      // You can render any custom fallback UI
      return (
        <Suspense fallback=''>
          <PageError />
        </Suspense>
      );
    }

    return children;
  }
}

// export default withTranslation()(ErrorBoundary);
export default ErrorBoundary;
