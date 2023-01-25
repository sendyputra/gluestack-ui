import React, { forwardRef } from 'react';
import { ScrollView } from 'react-native';
import { mergeRefs } from '@universa11y/utils';
import { MenuProvider } from './MenuContext';
import { useMenuContext } from './context';
import { useMenu, useMenuTypeahead } from './useMenu';

export const MenuContent = (StyledMenuContent: any) =>
  forwardRef(
    ({ menuRef, closeOnSelect = true, children, ...props }: any, ref: any) => {
      const menuProps = useMenu();
      const typeaheadProps = useMenuTypeahead(menuProps);
      const { value } = useMenuContext('MenuContext');
      const { x, y, strategy, floating, handleClose } = value;
      const mergedRef = mergeRefs([menuRef, ref, floating]);
      return (
        <MenuProvider closeOnSelect={closeOnSelect} onClose={handleClose}>
          <StyledMenuContent
            {...props}
            {...menuProps}
            {...typeaheadProps}
            ref={mergedRef}
            sx={{
              position: strategy,
              top: y ?? 10,
              left: x ?? 10,
            }}
          >
            <ScrollView>{children}</ScrollView>
          </StyledMenuContent>
        </MenuProvider>
      );
    }
  );

export default MenuContent;