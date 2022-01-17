# Domain Driven Design

Domain - sub-domain of the app


| TYPE | description | example |
| :---: | :---: | :---: |
| Feature | Contains components for an use case. | search-flight component|
| UI | Contains so-called "dumb components" that are use-case agnostic and thus reusable.	 | datetime-component, address-component, adress-pipe|
|API| Exports building blocks from the current subdomain for others.	|Flight API|
|Domain|	Contains the domain models (classes, interfaces, types) that are used by the domain (swimlane)|__|
|Util|Include general utility functions	|formatDate|

