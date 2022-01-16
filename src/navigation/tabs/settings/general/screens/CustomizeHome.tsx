import React, {ReactNode, useState} from 'react';
import CustomizeHomeCard from '../../../../../components/customize-home-card/CustomizeHomeCard';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../../store';
import styled from 'styled-components/native';
import {AssetSelectionOptions} from '../../../../../constants/AssetSelectionOptions';
import {ItemProps} from '../../../../../components/list/AssetSelectorRow';

const HeaderImg = styled.View`
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  flex: 1;
  flex-wrap: wrap;
`;

const CardListContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const CustomizeHomeContainer = styled.SafeAreaView`
  flex: 1;
`;

const CustomizeHomeCardContainer = styled.View`
  margin: 10px 0;
`;

const ScrollViewContainer = styled.ScrollView`
  margin-top: 20px;
  padding: 0 15px;
`;

const Img = styled.View<{isFirst: boolean}>`
  width: 20px;
  height: 20px;
  min-height: 22px;
  margin-left: ${({isFirst}) => (isFirst ? 0 : '-3px')};
`;

const AssetCardComponent = (
  AssetsList: ItemProps[],
  value: number,
  show: boolean,
) => {
  /** TODO: Assign stored value */
  const [checked, setChecked] = useState(show);
  const _onCTAPress = () => {
    /** TODO: Store the value and Redirect me */
    setChecked(!checked);
  };

  const HeaderComponent = (
    <HeaderImg>
      {AssetsList &&
        AssetsList.map(
          (asset, index) =>
            asset && (
              <Img key={index} isFirst={index === 0 || index % 7 === 0}>
                {asset.roundIcon(20)}
              </Img>
            ),
        )}
    </HeaderImg>
  );

  return (
    <CustomizeHomeCardContainer>
      <CustomizeHomeCard
        header={HeaderComponent}
        body={{
          title: 'My Everything Wallet',
          value: `$ ${value}`,
        }}
        footer={{
          onCTAPress: _onCTAPress,
          checked: checked,
        }}
      />
    </CustomizeHomeCardContainer>
  );
};

const CustomizeHome = () => {
  const wallets = useSelector(({WALLET}: RootState) => WALLET.wallets);
  const cardsList: Array<ReactNode | null> = [];

  if (wallets) {
    Object.values(wallets).map(wallet => {
      const {assets, totalBalance = 0, show} = wallet;
      const list = assets
        .map(({assetAbbreviation}) => assetAbbreviation)
        .map(assetAbbreviation =>
          AssetSelectionOptions.find(
            ({id}: {id: string | number}) => id === assetAbbreviation,
          ),
        );

      !!list.length &&
        cardsList.push(
          AssetCardComponent(list as ItemProps[], totalBalance, !!show),
        );
    });
  }

  return (
    <CustomizeHomeContainer>
      <ScrollViewContainer>
        <CardListContainer>{cardsList.map(card => card)}</CardListContainer>
      </ScrollViewContainer>
    </CustomizeHomeContainer>
  );
};

export default CustomizeHome;
