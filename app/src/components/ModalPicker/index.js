import React, { useContext } from 'react';
import { css, ThemeContext } from 'styled-components';
import { Modal, Text, TouchableOpacity, View, Dimensions, Picker } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const ModalPicker = ({ isVisible, onConfirm, onClose, selectedValue, options, headerTitle }) => {
  const { colors } = useContext(ThemeContext);

  const handleSelect = (value) => {
    onConfirm(value);
    onClose();
  };

  return (
    <Modal animationType="slide" transparent visible={isVisible}>
      <TouchableOpacity onPress={onClose}>
        <View
          css={css`
            background-color: red;
            height: ${deviceHeight}px;
            width: ${deviceWidth}px;
            opacity: 0;
          `}
        />
      </TouchableOpacity>

      <View
        css={css`
          flex: 1;
          justify-content: flex-end;
          padding-left: 6px;
          padding-right: 6px;
        `}
      >
        <View
          css={css`
            background-color: #fff;
            border-radius: 20px;
            height: 350px;
            align-items: center;
          `}
        >
          <View
            css={css`
              border-bottom-color: ${colors.lightGray};
              border-bottom-width: 1px;
              align-self: stretch;
              align-items: center;
              padding-bottom: 10px;
            `}
          >
            <Text
              css={css`
                color: #8f8f8f;
                font-size: 20px;
                margin-top: 10px;
              `}
            >
              {headerTitle}
            </Text>
          </View>

          <Picker
            selectedValue={selectedValue}
            onValueChange={(selectedType) => onConfirm(selectedType)}
            css={css`
              width: ${deviceWidth}px;
            `}
          >
            <Picker.Item label="Select from" value={''} />
            {options.map((option) => (
              <Picker.Item key={option.label} label={option.label} value={option.value} />
            ))}
          </Picker>

          <View
            css={css`
              border-top-color: ${colors.lightGray};
              border-top-width: 1px;
              margin-top: 20px;
              align-self: stretch;
              align-items: center;
            `}
          >
            <TouchableOpacity
              onPress={() => handleSelect(selectedValue)}
              hitSlop={{ top: 15, bottom: 15, left: 20, right: 20 }}
            >
              <Text
                css={css`
                  color: #007ff9;
                  font-size: 20px;
                  margin-top: 10px;
                `}
              >
                Ok
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalPicker;
