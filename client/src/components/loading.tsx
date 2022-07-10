import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
import { PropsWithChildren } from "react";
import { Col, Container, Row } from '@mverissimoo/emotion-grid';

function inlineWrapperWithMargin({ children}: PropsWithChildren<unknown>) {
  return <span>{children}</span>
} 

const Loading = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={4} sm={4} md={4} lg={3} xl={3}>
            <Skeleton
              count={6}
              wrapper={inlineWrapperWithMargin}
              width={'100%'}
            />
          </Col>
          <Col xs={12} sm={4} md={4} lg={3} xl={3}>
            <Skeleton
              count={6}
              wrapper={inlineWrapperWithMargin}
              width={'100%'}
            />
          </Col>
          <Col xs={12} sm={4} md={4} lg={3} xl={3}>
            <Skeleton
              count={6}
              wrapper={inlineWrapperWithMargin}
              width={'100%'}
            />
          </Col>
          <Col xs={12} sm={4} md={4} lg={3} xl={3}>
            <Skeleton
              count={6}
              wrapper={inlineWrapperWithMargin}
              width={'100%'}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Loading;