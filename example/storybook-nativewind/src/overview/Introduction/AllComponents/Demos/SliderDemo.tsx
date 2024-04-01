import {
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from '@/components/ui';
import React from 'react';

export const SliderDemo = () => {
  return (
    <Slider
      defaultValue={30}
      size="md"
      orientation="horizontal"
      isDisabled={false}
      isReversed={false}
    >
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb />
    </Slider>
  );
};
