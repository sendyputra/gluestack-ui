'use client';
import React from 'react';
import { createInput } from '@gluestack-ui/input';
import { View, Pressable, TextInput, Platform } from 'react-native';
import { tva } from '@gluestack-ui/nativewind-utils/tva';
import {
  withStyleContext,
  useStyleContext,
} from '@gluestack-ui/nativewind-utils/withStyleContext';
import { withStyleContextAndStates } from '@gluestack-ui/nativewind-utils/withStyleContextAndStates';
import { cssInterop } from '@gluestack-ui/nativewind-utils/cssInterop';
import { withStates } from '@gluestack-ui/nativewind-utils/withStates';
import type { VariantProps } from '@gluestack-ui/nativewind-utils';
const SCOPE = 'INPUT';

const UIInput = createInput({
  // @ts-ignore
  Root:
    Platform.OS === 'web'
      ? withStyleContext(View, SCOPE)
      : withStyleContextAndStates(View, SCOPE),
  Icon: View,
  Slot: Pressable,
  Input: Platform.OS === 'web' ? TextInput : withStates(TextInput),
});

const inputStyle = tva({
  base: 'border-background-300 flex-row overflow-hidden content-center data-[hover=true]:border-outline-400 data-[focus=true]:border-primary-700 data-[focus=true]:hover:border-primary-700 data-[disabled=true]:opacity-40 data-[disabled=true]:hover:border-background-300 items-center',

  variants: {
    size: {
      xl: 'h-12',
      lg: 'h-11',
      md: 'h-10',
      sm: 'h-9',
    },

    variant: {
      underlined:
        'rounded-none border-b data-[invalid=true]:border-b-2 data-[invalid=true]:border-error-700 data-[invalid=true]:hover:border-error-700 data-[invalid=true]:data-[focus=true]:border-error-700 data-[invalid=true]:data-[focus=true]:hover:border-error-700 data-[invalid=true]:data-[disabled=true]:hover:border-error-700',

      outline:
        'rounded border data-[invalid=true]:border-error-700 data-[invalid=true]:hover:border-error-700 data-[invalid=true]:data-[focus=true]:border-error-700 data-[invalid=true]:data-[focus=true]:hover:border-error-700 data-[invalid=true]:data-[disabled=true]:hover:border-error-700 data-[focus=true]:web:ring-1 data-[focus=true]:web:ring-inset data-[focus=true]:web:ring-primary-700 data-[invalid=true]:web:ring-1 data-[invalid=true]:web:ring-inset data-[invalid=true]:web:ring-error-700 data-[invalid=true]:data-[focus=true]:hover:web:ring-1 data-[invalid=true]:data-[focus=true]:hover:web:ring-inset data-[invalid=true]:data-[focus=true]:hover:web:ring-error-700 data-[invalid=true]:data-[disabled=true]:hover:web:ring-1 data-[invalid=true]:data-[disabled=true]:hover:web:ring-inset data-[invalid=true]:data-[disabled=true]:hover:web:ring-error-700',

      rounded:
        'rounded-full border data-[invalid=true]:border-error-700 data-[invalid=true]:hover:border-error-700 data-[invalid=true]:data-[focus=true]:border-error-700 data-[invalid=true]:data-[focus=true]:hover:border-error-700 data-[invalid=true]:data-[disabled=true]:hover:border-error-700 data-[focus=true]:web:ring-1 data-[focus=true]:web:ring-inset data-[focus=true]:web:ring-primary-700 data-[invalid=true]:web:ring-1 data-[invalid=true]:web:ring-inset data-[invalid=true]:web:ring-error-700 data-[invalid=true]:data-[focus=true]:hover:web:ring-1 data-[invalid=true]:data-[focus=true]:hover:web:ring-inset data-[invalid=true]:data-[focus=true]:hover:web:ring-error-700 data-[invalid=true]:data-[disabled=true]:hover:web:ring-1 data-[invalid=true]:data-[disabled=true]:hover:web:ring-inset data-[invalid=true]:data-[disabled=true]:hover:web:ring-error-700',
    },
  },
});

const inputIconStyle = tva({
  // base: 'text-typography-400',
  parentVariants: {
    size: {
      '2xs': 'h-3 w-3',
      'xs': 'h-3.5 w-3.5',
      'sm': 'h-4 w-4',
      'md': 'h-[18px] w-[18px]',
      'lg': 'h-5 w-5',
      'xl': 'h-6 w-6',
    },
  },
});

const inputSlotStyle = tva({
  base: 'justify-center items-center web:disabled:cursor-not-allowed',
});

const inputFieldStyle = tva({
  base: 'flex-1 text-typography-900 web:cursor-text web:data-[disabled=true]:cursor-not-allowed py-auto px-3 placeholder:text-typography-500',

  parentVariants: {
    variant: {
      underlined: 'web:outline-0 web:outline-none px-0',
      outline: 'web:outline-0 web:outline-none',
      rounded: 'web:outline-0 web:outline-none px-4',
    },

    size: {
      '2xs': 'text-2xs leading-[0px]',
      'xs': 'text-xs leading-[0px]',
      'sm': 'text-sm leading-[0px]',
      'md': 'text-base leading-[0px]',
      'lg': 'text-lg leading-[0px]',
      'xl': 'text-xl leading-[0px]',
      '2xl': 'text-2xl leading-[0px]',
      '3xl': 'text-3xl leading-[0px]',
      '4xl': 'text-4xl leading-[0px]',
      '5xl': 'text-5xl leading-[0px]',
      '6xl': 'text-6xl leading-[0px]',
    },
  },
});

cssInterop(UIInput, { className: 'style' });
cssInterop(UIInput.Icon, { className: 'style' });
cssInterop(UIInput.Slot, { className: 'style' });
cssInterop(UIInput.Input, { className: 'style' });

type IInputProps = React.ComponentProps<typeof UIInput> &
  VariantProps<typeof inputStyle>;
const Input = React.forwardRef(
  (
    {
      className,
      variant = 'outline',
      size = 'md',
      ...props
    }: { className?: string } & IInputProps,
    ref?: any
  ) => {
    return (
      <UIInput
        ref={ref}
        {...props}
        className={inputStyle({ variant, size, class: className })}
        context={{ variant, size }}
      />
    );
  }
);

type IInputIconProps = React.ComponentProps<typeof UIInput.Icon> & { as: any };
const InputIcon = React.forwardRef(
  (
    {
      className,
      fill = 'none',
      as: AsComp,
      ...props
    }: { className?: any; fill?: string; color?: string } & IInputIconProps,
    ref?: any
  ) => {
    const { size: parentSize } = useStyleContext(SCOPE);
    const { color = '#8C8C8C' } = props;

    if (AsComp) {
      return (
        <View
          className={inputIconStyle({
            parentVariants: {
              size: parentSize,
            },
            class: className,
          })}
        >
          <AsComp
            fill={fill}
            color={color}
            {...props}
            height={'100%'}
            width={'100%'}
          />
        </View>
      );
    }
    return (
      <UIInput.Icon
        ref={ref}
        {...props}
        // @ts-ignore
        fill={fill}
        className={inputIconStyle({
          parentVariants: {
            size: parentSize,
          },
          class: className,
        })}
      />
    );
  }
);

type IInputSlotProps = React.ComponentProps<typeof UIInput.Slot> &
  VariantProps<typeof inputSlotStyle>;
const InputSlot = React.forwardRef(
  (
    { className, ...props }: { className?: string } & IInputSlotProps,
    ref?: any
  ) => {
    return (
      <UIInput.Slot
        ref={ref}
        {...props}
        className={inputSlotStyle({
          class: className,
        })}
      />
    );
  }
);

type IInputFieldProps = React.ComponentProps<typeof UIInput.Input> &
  VariantProps<typeof inputFieldStyle>;
const InputField = React.forwardRef(
  (
    { className, ...props }: { className?: string } & IInputFieldProps,
    ref?: any
  ) => {
    const { variant: parentVariant, size: parentSize } = useStyleContext(SCOPE);

    return (
      <UIInput.Input
        ref={ref}
        {...props}
        className={inputFieldStyle({
          parentVariants: {
            variant: parentVariant,
            size: parentSize,
          },
          class: className,
        })}
      />
    );
  }
);

Input.displayName = 'Input';
InputIcon.displayName = 'InputIcon';
InputSlot.displayName = 'InputSlot';
InputField.displayName = 'InputField';

export { Input, InputField, InputIcon, InputSlot };
