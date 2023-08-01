'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledPage = styled.div`
  .page {
  }
`;

// FIXME: Using App Router paradigm causes page freezing after editing
export default async function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.styled-components file.
   */
  return (
    <StyledPage>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>
              Welcome 👋
            </h1>
            <motion.div
              style={{
                background: 'black',
                width: '16px',
                height: '16px',
              }}
              animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 270, 270, 0],
                borderRadius: ['20%', '20%', '50%', '50%', '20%'],
              }}
            />
          </div>
        </div>
      </div>
    </StyledPage>
  );
}
