import type { Schema, Struct } from '@strapi/strapi';

export interface SharedButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'button';
    icon: 'link';
  };
  attributes: {
    label: Schema.Attribute.String;
    theme: Schema.Attribute.Enumeration<['primary', 'secondary']>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.button': SharedButton;
    }
  }
}
