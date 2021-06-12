using {dalrae.cap.supabase.demo as schema} from '../db/schema';
using from './service';


annotate schema.WorkOrders with @(
  Capabilities : {
    Insertable : true,
    Updatable  : true,
    Deletable  : false
  },
  Common       : {SemanticKey : [ID]},
  UI           : {
    HeaderInfo           : {
      TypeName       : 'Order',
      TypeNamePlural : 'Orders',
      Title          : {Value : description}
    },
    HeaderFacets         : [
      {
        $Type  : 'UI.ReferenceFacet',
        Label  : 'Created',
        Target : '@UI.FieldGroup#Created'
      },
      {
        $Type  : 'UI.ReferenceFacet',
        Label  : 'Modified',
        Target : '@UI.FieldGroup#Modified'
      },
    ],
    Identification       : [{Value : description}],
    SelectionFields      : [customer_ID],
    LineItem             : {
      $value             : [
        {Value : ID, Label: 'Order ID' },
        {Value : startDate, Label: 'Start date' },
        {Value : endDate, Label: 'End date'},
        {Value : customer_ID, Label: 'Customer'},
        {Value : createdBy, Label: 'Ordered by'},
        {Value : createdAt, Label: 'Ordered on'},
        // {
        //   $Type                     : 'UI.DataField',
        //   Value                     : isExpired,
        //   Criticality               : isExpiredStatus,
        //   CriticalityRepresentation : #WithIcon
        // }
      ],
      //![@UI.Criticality] : isExpiredStatus
    },
    Facets               : [
      {
        $Type  : 'UI.ReferenceFacet',
        Label  : '{i18n>General}',
        Target : '@UI.FieldGroup#General'
      }
    // {
    //   $Type  : 'UI.ReferenceFacet',
    //   Label  : '{i18n>AllocationsList}',
    //   Target : 'allocations/@UI.LineItem'
    // }
    ],
    FieldGroup #Created  : {Data : [
      {Value : createdBy},
      {Value : createdAt},
    ]},
    FieldGroup #Modified : {Data : [
      {Value : modifiedBy},
      {Value : modifiedAt},
    ]}
  }
) {
  ID          @(
    title       : '{i18n>Project}',
    UI.HiddenFilter,
    Core.Computed,
    Common.Text : {
      $value                 : description,
      ![@UI.TextArrangement] : #TextOnly
    }
  );
  description @title     : 'Description';
  customer    @(
    title  : '{i18n>Customer}',
    Common : {
      ValueList                : {CollectionPath : 'Customers', },
      ValueListWithFixedValues : true,
      Text                     : customer.name,
      TextArrangement          : #TextOnly
    }
  );
  customer_ID @(
    title  : 'Customer',
    Common : {
      ValueList                : {CollectionPath : 'Customers', },
      ValueListWithFixedValues : true,
      Text                     : customer.name,
      TextArrangement          : #TextOnly
    }
  );
};
