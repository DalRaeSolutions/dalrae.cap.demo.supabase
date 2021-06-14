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
    DataPoint #Price     : {
      Value : price,
      Title : 'Price'
    },
    DataPoint #Paid      : {
      Value                     : paid,
      Title                     : 'Paid',
      Criticality               : paidStatus,
      CriticalityRepresentation : #WithIcon
    },
    HeaderFacets         : [
      {
        $Type  : 'UI.ReferenceFacet',
        Label  : 'Price',
        Target : '@UI.DataPoint#Price'
      },
      {
        $Type  : 'UI.ReferenceFacet',
        Label  : 'Paid',
        Target : '@UI.DataPoint#Paid'
      }
    ],
    Identification       : [{Value : description}],
    SelectionFields      : [customer_ID],
    LineItem             : {$value : [
      {
        Value : ID,
        Label : 'Order ID'
      },
      {
        Value : customer_ID,
        Label : 'Customer'
      },
      {
        Value : createdBy,
        Label : 'Ordered by'
      },
      {
        Value : createdAt,
        Label : 'Ordered on'
      },
      {
        Value : price,
        Label : 'Price'
      },
      {
        Value : paid,
        Label : 'Is paid'
      },
      {
        $Type                     : 'UI.DataField',
        Value                     : paid,
        Label                     : 'Paid?',
        Criticality               : paidStatus,
        CriticalityRepresentation : #WithIcon
      }
    ],
    //![@UI.Criticality] : paidStatus
    },
    Facets               : [
      {
        $Type  : 'UI.ReferenceFacet',
        Label  : '{i18n>General}',
        Target : '@UI.FieldGroup#General'
      },
      {
        $Type  : 'UI.ReferenceFacet',
        Label  : 'Other orders by this customer',
        Target : 'customer/orders/@UI.LineItem'
      }
    ],
    FieldGroup #Created  : {Data : [
      {Value : createdBy},
      {Value : createdAt},
    ]},
    FieldGroup #Price    : {Data : [
      {Value : price},
      {Value : paid},
    ]},
    FieldGroup #General  : {Data : [{
      Value : customer.name,
      Label : 'Customer name'
    }

    ]},
    FieldGroup #Modified : {Data : [
      {Value : modifiedBy},
      {Value : modifiedAt},
    ]}
  }
) {
  ID          @(
    title       : 'Order',
    UI.HiddenFilter,
    Core.Computed,
    Common.Text : {
      $value                 : description,
      ![@UI.TextArrangement] : #TextOnly
    }
  );
  description @title                  : 'Description';

  customer_ID
              @title                  : 'Customer'
              @Common                 : {
    Text                     : customer.name,
    TextArrangement          : #TextOnly,
    ValueList                : {
      Label           : 'Customer',
      CollectionPath  : 'Customers',
      SearchSupported : false,
      Parameters      : [{
        $Type             : 'Common.ValueListParameterOut',
        LocalDataProperty : customer_ID,
        ValueListProperty : 'PlantNumber'
      }],
    },
    ValueListWithFixedValues : true,
  };

  price       @Measures.ISOCurrency   : currency;
  currency    @Semantics.currencyCode : true;

  customer    @(
    title  : 'Customer',
    Common : {
      Text            : customer.name,
      TextArrangement : #TextOnly
    }
  );
};

annotate schema.Customers with @(
  Capabilities : {
    Insertable : true,
    Updatable  : true,
    Deletable  : false
  },
  Common       : {SemanticKey : [ID]},
  UI           : {
    HeaderInfo           : {
      TypeName       : 'Customer',
      TypeNamePlural : 'Customers',
      Title          : {Value : name}
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
    Identification       : [{Value : name}],
    SelectionFields      : [name],
    LineItem             : {$value : [
      {
        Value : ID,
        Label : 'Order ID'
      },
      {
        Value : createdBy,
        Label : 'Created by'
      },
      {
        Value : createdAt,
        Label : 'Created on'
      },
    ], },
    Facets               : [{
      $Type  : 'UI.ReferenceFacet',
      Label  : 'Orders',
      Target : 'orders/@UI.LineItem'
    }],
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
  ID   @(
    title       : 'Customer',
    UI.HiddenFilter,
    Core.Computed,
    Common.Text : {
      $value                 : name,
      ![@UI.TextArrangement] : #TextOnly
    }
  );
  name @title : 'Name'
};
