import React, { useContext } from 'react';
import { Text } from 'react-native';
import { css, ThemeContext } from 'styled-components/native';
import { Grid, Col } from 'react-native-easy-grid';

const TradeItem = ({ data }) => {
  const { colors } = useContext(ThemeContext);

  return (
    <Grid
      css={css`
        flex-direction: row;
        align-items: center;

        background-color: ${colors.navy};
        height: 60px;
        padding: 4px;
        margin-bottom: 20px;
        margin-left: 10px;
        margin-right: 10px;
        border-radius: 6px;
      `}
    >
      <Col>
        <Text
          css={css`
            color: #fff;
            text-align: center;
          `}
        >
          {data.side}
        </Text>
      </Col>

      <Col>
        <Text
          css={css`
            color: #fff;
            text-align: center;
          `}
        >
          {`$${data.price}`}
        </Text>
      </Col>

      <Col>
        <Text
          css={css`
            color: #fff;
            text-align: center;
          `}
        >
          {data.size}
        </Text>
      </Col>
    </Grid>
  );
};

export default TradeItem;
