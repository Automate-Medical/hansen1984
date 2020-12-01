# hansen1984

A TypeScript implementation of the original Hansen/Wasserman (1984) equations for predicted VO2 peak in cycle-ergometer exercise testing from [Predicted Values for Clinical Exercise Testing](https://pubmed.ncbi.nlm.nih.gov/6421218/) (doi:10.1164/arrd.1984.129.2p2.s49)

## Background

> To evaluate patients with exertional dyspnea, clinicians need to know the range of expected performance during exercise in normal subjects taken from an appropriate population... To define the normal
responses to exercise in a more appropriate group, we reviewed exercise studies of former or current male shipyard workers without discernible pulmonary parenchymal or cardiovascular disease who exercised in an incremental fashion to their voluntary limits on a cycle ergometer. 

In 2001 the [ATS recommended continuing use](https://www.atsjournals.org/doi/full/10.1164/rccm.167.2.211) of the Hansen/Wasserman reference values:

> In the interim and until a new set of “optimal” reference values are available, the committee considers that the two most widely used sets of references values—Jones and coworkers (427) (Table 14) and Hansen and coworkers (235) (Table 15)—should continue to be used clinically.

This module implements the reference values as they originally appeared in  J. E. Hansen, D. Y. Sue, and K. Wasserman, “Predicted values for clinical exercise testing,” American Review of Respiratory
Disease, vol. 129, no. 2, pp. S49–S55, 1984. (doi:10.1164/arrd.1984.129.2p2.s49) and later in the 2001 ATS recommendation.

## Installation

`npm install @automate-medical/hansen1984`

Please note: 

* `@automate-medical/hansen1984` is packaged as a **native ES module** only. Your runtime must support native modules (i.e. Node >= 13). 
* `@automate-medical/hansen1984` is written in **TypeScript**, declarations are packaged with the build.

## Usage

This module exports one function `vo2Peak` accepting age, sex (Male or Female), height (in cm), and weight (in kg) which returns a number denominated in ml/min.

```
import { vo2Peak } from '@automate-medical/hansen1984';

const predicted = vo2Peak({ age: 30, sex: "Male", height: 165, weight: 65 });
console.log(predicted);
```

## Notice

This repository is provided for educational purposes only, it has not been reviewed and cannot be used in a clinical practice. The software is provided "as is", without any express or implied warranty, and no implication of fitness for a particular use.
