const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'YOUR TOKEN';

bot.on('ready', () => {
    console.log("chiri-miri is online")
})

const author = "636439831798611980"
const channel = "636834836358758403"

const java = [
    ["\n\n**U N I T - 1**\n\n**1. Introduction**\nHistory,   architecture and its components,   Java Class File,   Java Runtime Environment,   The Java Virtual Machine,   JVM Components,   The Java API,   java platform,   java development kit,Lambda Expressions,   Methods References,   Type Annotations,   Method Parameter Reflection,   setting the path environment variable,   Java Compiler And Interpreter,   java programs,   java applications,   main(),public,   static,   void,   string[] args,   statements,   white space,   case sensitivity,   identifiers,   keywords,   comments,   braces and code blocks,   variables,   variable name\n**Data types**\nprimitive data types,   Object Reference Types,   Strings,   Auto boxing,   operators and properties of operators,   Arithmetic operators,   assignment operators,   increment and decrement operator,   relational operator,   logical operator,   bitwise operator,   conditional operator"],
    ["\n\n**U N I T - 2**\n\n**Control Flow Statements**\nThe If…Else If…Else Statement,   The Switch…Case Statement\n**Iterations**\nThe While Loop,   The Do … While Loop,   The For Loop,   The Foreach Loop,   Labeled Statements,   The Break And Continue Statements,   The Return Statement\n**Classes**\nTypes of Classes,   Scope Rules,   Access Modifier,   Instantiating Objects From A Class,   Initializing The Class Object And Its Attributes,   Class Methods,   Accessing A Method,   Method Returning A Value,   Method's Arguments,   Method Overloading,   Variable Arguments [Varargs],   Constructors,   this Instance,   super Instance,   Characteristics Of Members Of A Class,   constants,   this instance,   static fields of a class,   static methods of a class,   garbage collection."],
    ["\n\n**U N I T - 3**\n\n**Inheritance**\nDerived Class Objects,   Inheritance and Access Control,   Default Base Class Constructors,   this and super keywords. Abstract Classes And Interfaces,   Abstract Classes,   Abstract Methods,   Interfaces,   What Is An Interface? How Is An Interface Different From An Abstract Class?,   Multiple Inheritance,   Default Implementation,   Adding New Functionality,   Method Implementation,   Classes V/s Interfaces,   Defining An Interface,   Implementing Interfaces.\n**Packages**\nCreating Packages,   Default Package,   Importing Packages,   Using A Package."],
    ["\n\n**U N I T - 4**\n\n**Enumerations, Array**\nTwo Dimensional Arrays, Multi-Dimensional Arrays, Vectors, Adding Elements To A Vector, Accessing Vector Elements, Searching For Elements In A Vector, Working With The Size of The Vector.\n**Multithreading**\nthe thread control methods, thread life cycle, the main thread, creating a thread, extending the thread class.\n**Exceptions**\nCatching Java Exceptions, Catching Run-Time Exceptions, Handling Multiple Exceptions, The finally Clause, The throws Clause\n**Byte streams**\nreading console input, writing console output, reading file, writing file, writing binary data, reading binary data, getting started with character streams, writing file, reading file"],
    ["\n\n**U N I T - 5**\n\n**Event Handling**\nDelegation Event Model, Events, Event classes, Event listener interfaces, Using delegation event model, adapter classes and inner classes\n**Abstract Window Toolkit**\nWindow Fundamentals, Component, Container, Panel, Window, Frame, Canvas. Components – Labels, Buttons, Check Boxes, Radio Buttons, Choice Menus, Text Fields, Text, Scrolling List, Scrollbars, Panels, Frames\n**Layouts**\nFlow Layout, Grid Layout, Border Layout, Card Layout."]
]

const es = [
    ["\n\n**U N I T - 1**\n\n**Introduction**\nEmbedded Systems and general purpose computer systems,   history,   classifications,   applications and purpose of embedded systems\n**Core of embedded systems**\nmicroprocessors and microcontrollers,   RISC and CISC controllers,   Big endian and Little endian processors,   Application specific ICs,   Programmable logic devices,   COTS,   sensors and actuators,   communication interface,   embedded firmware,   other system components.\n**Characteristics and quality attributes of embedded systems**\nCharacteristics,   operational and non-operational quality attributes."],
    ["\n\n**U N I T - 2**\n\n**Embedded Systems – Application and Domain Specific**\nApplication specific – washing machine, domain specific - automotive\n**Embedded Hardware**\nMemory map, i/o map, interrupt map, processor family, external peripherals, memory – RAM , ROM, types of RAM and ROM, memory testing, CRC ,Flash memory.\n**Peripherals**\nControl and Status Registers, Device Driver, Timer Driver - Watchdog Timers"],
    ["\n\n**U N I T - 3**\n\n**The 8051 Microcontrollers**\nMicrocontrollers and Embedded processors, Overview of 8051 family. 8051 Microcontroller hardware, Input/output pins, Ports, and Circuits, External Memory.\n**8051 Programming in C**\nData Types and time delay in 8051 C, I/O Programming, Logic operations, Data conversion Programs. "],
    ["\n\n**U N I T - 4**\n\n**Designing Embedded System with 8051 Microcontroller:**\nFactors to be considered in selecting a controller,   why 8051 Microcontroller,   Designing with 8051.\n**Programming embedded systems:**\nstructure of embedded program,   infinite loop,   compiling,   linking and debugging."],
    ["\n\n**U N I T - 5**\n\n**Real Time Operating System (RTOS):**\nOperating system basics,   types of operating systems,   Real-Time Characteristics,   Selection Process of an RTOS.\n**Design and Development:**\nEmbedded system development Environment – IDE,   types of file generated on cross compilation,   disassembler/ de-compiler,   simulator,   emulator and debugging,   embedded product development life-cycle,   trends in embedded industry. "]
]

const stats = [
    ["\n\n**U N I T - 1**\n\n**The Mean, Median, Mode, and Other Measures of Central Tendency:**\nIndex,   or Subscript,   Notation,   Summation Notation,   Averages,   or Measures of Central Tendency ,The Arithmetic Mean ,   The Weighted Arithmetic Mean ,Properties of the Arithmetic Mean ,The Arithmetic Mean Computed from Grouped Data ,The Median ,The Mode,   The Empirical Relation Between the Mean,   Median,   and Mode,   The Geometric Mean G,   The Harmonic Mean H ,The Relation Between the Arithmetic,   Geometric,   and Harmonic Means,   The Root Mean Square,   Quartiles,   Deciles,   and Percentiles,   Software and Measures of Central Tendency.\n**The Standard Deviation and Other Measures of Dispersion:**\nDispersion,   or Variation,   The Range,   The Mean Deviation,   The SemiInterquartile Range,   The 10–90 Percentile Range,   The Standard Deviation,   The Variance,   Short Methods for Computing the Standard Deviation,   Properties of the Standard Deviation,   Charlie’s Check,   Sheppard’s Correction for Variance,   Empirical Relations Between Measures of Dispersion,   Absolute and Relative Dispersion; Coeﬃcient of Variation,   Standardized Variable; Standard Scores,   Software and Measures of Dispersion.\n**Introduction to R:**\nBasic syntax,   data types,   variables,   operators,   control statements,   R-functions,   R –Vectors,   R – lists,   R Arrays. "],
    ["\n\n**U N I T - 2**\n\n**Moments,Skewness, and Kurtosis :**\nMoments ,    Moments for Grouped Data ,   Relations Between Moments ,    Computation of Moments for Grouped Data,    Charlie’s Check and Sheppard’s Corrections,     Moments in Dimensionless Form,    Skewness,    Kurtosis,    Population Moments,    Skewness,    and Kurtosis,    Software Computation of Skewness and Kurtosis.\n**Elementary Probability Theory:**\nDeﬁnitions of Probability,    Conditional Probability; Independent and Dependent Events,    Mutually Exclusive Events,    Probability Distributions,    Mathematical Expectation,    Relation Between Population,    Sample Mean,    and Variance,    Combinatorial Analysis,    Combinations,    Stirling’s Approximation to n!,     Relation of Probability to Point Set Theory,    Euler or Venn Diagrams and Probability.\n**Elementary Sampling Theory :**\nSampling Theory,    Random Samples and Random Numbers,    Sampling With and Without Replacement,   Sampling Distributions,    Sampling Distribution of Means,    Sampling Distribution of Proportions,    Sampling Distributions of Diﬀerences and Sums,    Standard Errors,    Software Demonstration of Elementary Sampling Theory"],
    ["\n\n**U N I T - 3**\n\n**Statistical Estimation Theory:**\nEstimation of Parameters,   Unbiased Estimates,   Eﬃcient Estimates,   Point Estimates and Interval Estimates; Their Reliability,   Conﬁdence-Interval Estimates of Population Parameters,   Probable Error.\n**Statistical Decision Theory:**\nStatistical Decisions,   Statistical Hypotheses,   Tests of Hypotheses and Signiﬁcance,   or Decision Rules,   Type I and Type II Errors,   Level of Signiﬁcance,   Tests Involving Normal Distributions,   Two-Tailed and One-Tailed Tests,   Special Tests,   Operating-Characteristic Curves; the Power of a Test,   p-Values for Hypotheses Tests,   Control Charts,   Tests Involving Sample Diﬀerences,   Tests Involving Binomial Distributions.\n**Statistics in R:**\nmean,   median,   mode,   Normal Distribution ,   Binomial Distribution,   Frequency Distribution in R. "],
    ["\n\n**U N I T - 4**\n\n**Small Sampling Theory:**\nSmall Samples,     Student’s t Distribution,   Conﬁdence Intervals,   Tests of Hypotheses and Signiﬁcance,   The ChiSquare Distribution,   Conﬁdence Intervals for Sigma ,   Degrees of Freedom,   The F Distribution.\n**The Chi-Square Test:**\nObserved and Theoretical Frequencies,   Deﬁnition of chi-square,   Signiﬁcance Tests,   The Chi-Square Test for Goodness of Fit,   Contingency Tables,   Yates’ Correction for Continuity,   Simple Formulas for Computing chi-square,   Coeﬃcient of Contingency,   Correlation of Attributes,   Additive Property of chisquare. "],
    ["\n\n**U N I T - 5**\n\n**Curve Fitting and the Method of Least Squares:**\nRelationship Between Variables,   Curve Fitting,   Equations of Approximating Curves,   Freehand Method of Curve Fitting,   The Straight Line,   The Method of Least Squares,   The Least-Squares Line,   Nonlinear Relationships,   The Least-Squares Parabola,   Regression,   Applications to Time Series,   Problems Involving More Than Two Variables. **Correlation Theory:**\nCorrelation and Regression,   Linear Correlation,   Measures of Correlation,   The Least-Squares Regression Lines,   Standard Error of Estimate,   Explained and Unexplained Variation,   Coeﬃcient of Correlation,   Remarks Concerning the Correlation Coeﬃcient,   Product-Moment Formula for the Linear Correlation Coeﬃcient,   Short Computational Formulas,   Regression Lines and the Linear Correlation Coeﬃcient,   Correlation of Time Series,   Correlation of Attributes,   Sampling Theory of Correlation,   Sampling Theory of Regression."]
]

const se = [
    ["\n\n**U N I T - 1**\n\n**Introduction:**\nWhat is software engineering? Software Development Life Cycle,   Requirements Analysis,   Software Design,   Coding,   Testing,   Maintenance etc.\n**Software Requirements:** Functional and Non-functional requirements,   User Requirements,   System Requirements,   Interface Specification,   Documentation of the software requirements.\n**Software Processes:**\nProcess and Project,   Component Software Processes.\n**Software Development Process Models:**\n\t• Waterfall Model.\n\t• Prototyping.\n\t• Iterative Development.\n\t• Rational Unified Process.\n\t• The RAD Model\n\t• Time boxing Model.\n**Agile software development:**\nAgile methods,   Plan-driven and agile development,   Extreme programming,   Agile project management,   Scaling agile methods. "],
    ["\n\n**U N I T - 2**\n\n**Socio-technical system:**\nEssential characteristics of socio technical systems,   Emergent System Properties,   Systems Engineering,   Components of system such as organization,   people and computers,   Dealing Legacy Systems.\n**Critical system:**\nTypes of critical system,   A simple safety critical system,   Dependability of a system,   Availability and Reliability,   Safety and Security of Software systems.\n**Requirements Engineering Processes:**\nFeasibility study,   Requirements elicitation and analysis,   Requirements Validations,   Requirements Management.\n**System Models:**\nModels and its types,   Context Models,   Behavioural Models,   Data Models,   Object Models,   Structured Methods. "],
    ["\n\n**U N I T - 3**\n\n**Architectural Design:**\nArchitectural Design Decisions,   System Organisation,   Modular Decomposition Styles,   Control Styles,   Reference Architectures.\n**User Interface Design:**\nNeed of UI design,   Design issues,   The UI design Process,   User analysis,   User Interface Prototyping,   Interface Evaluation. Project Management Software Project Management,   Management activities,   Project Planning,   Project Scheduling,   Risk Management.\n**Quality Management:**\nProcess and Product Quality,   Quality assurance and Standards,   Quality Planning,   Quality Control,   Software Measurement and Metrics. "],
    ["\n\n**U N I T - 4**\n\n**Verification and Validation:**\nPlanning Verification and Validation,   Software Inspections,   Automated Static Analysis,   Verification and Formal Methods.\n**Software Testing:**\nSystem Testing,   Component Testing,   Test Case Design,   Test Automation. Software Measurement: Size-Oriented Metrics,   Function-Oriented Metrics,   Extended Function Point Metrics\n**Software Cost Estimation:**\nSoftware Productivity,   Estimation Techniques,   Algorithmic Cost Modelling,   Project Duration and Staffing"],
    ["\n\n**U N I T - 5**\n\n**Process Improvement:**\nProcess and product quality,   Process Classification,   Process Measurement,   Process Analysis and Modeling,   Process Change,   The CMMI Process Improvement Framework.\n**Service Oriented Software Engineering:**\nServices as reusable components,   Service Engineering,   Software Development with Services.\n**Software reuse:**\nThe reuse landscape,   Application frameworks,   Software product lines,   COTS product reuse.\n**Distributed software engineering:**\nDistributed systems issues,   Client– server computing,   Architectural patterns for distributed systems,   Software as a service "]
]

const graphics = [
    ["\n\n**U N I T - 1**\n\n**Introduction to Computer Graphics:**\nOverview of Computer Graphics,   Computer Graphics Application and Software,   Description of some graphics devices,   Input Devices for Operator Interaction,   Active and Passive Graphics Devices,   Display Technologies,   Storage Tube Graphics Displays,   Calligraphic Refresh Graphics Displays,   Raster Refresh (Raster-Scan) Graphics Displays,   Cathode Ray Tube Basics,   Color CRT Raster Scan Basics,   Video Basics,   The Video Controller,   Random-Scan Display Processor,   LCD displays.\n**Scan conversion**\nDigital Differential Analyzer (DDA) algorithm,   Bresenhams’ Line drawing algorithm. Bresenhams’ method of Circle drawing,   Midpoint Circle Algorithm,   Midpoint Ellipse Algorithm,   Mid-point criteria,   Problems of Aliasing,   end-point ordering and clipping lines,   Scan Converting Circles,   Clipping Lines algorithms– Cyrus-Beck,   Cohen-Sutherland and Liang-Barsky,   Clipping Polygons,   problem with multiple components. "],
    ["\n\n**U N I T - 2**\n\n**Two-Dimensional Transformations:**\nTransformations and Matrices,   Transformation Conventions,   2D Transformations,   Homogeneous Coordinates and Matrix Representation of 2D Transformations,   Translations and Homogeneous Coordinates,   Rotation,   Reflection,   Scaling,   Combined Transformation,   Transformation of Points,   Transformation of The Unit Square,   Solid Body Transformations,   Rotation About an Arbitrary Point,   Reflection through an Arbitrary Line,   A Geometric Interpretation of Homogeneous Coordinates,   The Window-to-Viewport Transformations.\n**Three-Dimensional Transformations:**\nThree-Dimensional Scaling,   Three-Dimensional Shearing,   ThreeDimensional Rotation,   Three-Dimensional Reflection,   ThreeDimensional Translation,   Multiple Transformation,   Rotation about an Arbitrary Axis in Space,   Reflection through an Arbitrary Plane,   Matrix Representation of 3D Transformations,   Composition of 3D Transformations,   Affine and Perspective Geometry,   Perspective Transformations,   Techniques for Generating Perspective Views,   Vanishing Points,   the Perspective Geometry and camera models,   Orthographic Projections,   Axonometric Projections,   Oblique Projections,   View volumes for projections. "],
    ["\n\n**U N I T - 3**\n\n**Viewing in 3D**\nStages in 3D viewing,   Canonical View Volume (CVV),   Specifying an Arbitrary 3D View,   Examples of 3D Viewing,   The Mathematics of Planar Geometric Projections,   Combined transformation matrices for projections and viewing,   Coordinate Systems and matrices,   camera model and viewing pyramid.\n**Light:**\nRadiometry,   Transport,   Equation,   Photometry\n**Color:**\nColorimetry,   Color Spaces,   Chromatic Adaptation,   Color Appearanc"],
    ["\n\n**U N I T - 4**\n\n**Visible-Surface Determination:**\nTechniques for efficient Visible-Surface Algorithms,   Categories of algorithms,   Back face removal,   The z-Buffer Algorithm,   Scan-line method,   Painter’s algorithms (depth sorting),   Area sub-division method,   BSP trees,   Visible-Surface Ray Tracing,   comparison of the methods.\n**Plane Curves and Surfaces:**\nCurve Representation,   Nonparametric Curves,   Parametric Curves,   Parametric Representation of a Circle,   Parametric Representation of an Ellipse,   Parametric Representation of a Parabola,   Parametric Representation of a Hyperbola,   Representation of Space Curves,   Cubic Splines,   ,   Bezier Curves,   B-spline Curves,   B-spline Curve Fit,   B-spline Curve Subdivision,   Parametric Cubic Curves,   Quadric Surfaces. Bezier Surfaces. "],
    ["\n\n**U N I T - 5**\n\n**Computer Animation:**\nPrinciples of Animation,   Key framing,   Deformations,   Character Animation,   Physics-Based Animation,   Procedural Techniques,   Groups of Objects.\n**Image Manipulation and Storage:**\nWhat is an Image? Digital image file formats,   Image compression standard – JPEG,   Image Processing - Digital image enhancement,   contrast stretching,   Histogram Equalization,   smoothing and median Filtering."]
]

bot.on('message', msg => {
    if (msg.content === ".help") {
        msg.reply('\n**Following are my commands**\n\n**.java**\t -\t Java\n**.java-unit_no**\t -\t gives specific Unit\n\n**.es**\t -\t embeded System\n**.es-unit_no**\t -\t gives specific Unit\n\n**.se**\t -\t Software Enginnering\n**.se-unit_no**\t -\t gives specific Unit\n\n**.graphics**\t -\t Computer Graphics\n**.graphics-unit_no**\t -\t gives specific Unit\n\n**.stats**\t -\t Maths / Statistics\n**.stats-unit_no**\t -\t gives specific Unit')
    }


    // For java
    if (msg.content === ".java") {
        for (i = 0; i < 5; i++) {
            msg.reply(java[i])
        }
    }
    if (msg.content === ".java-1") {
        msg.reply(java[0])
    }
    if (msg.content === ".java-2") {
        msg.reply(java[1])
    }
    if (msg.content === ".java-3") {
        msg.reply(java[2])
    }
    if (msg.content === ".java-4") {
        msg.reply(java[3])
    }
    if (msg.content === ".java-5") {
        msg.reply(java[4])
    }

    // Embeded System
    if (msg.content === ".es") {
        for (i = 0; i < 5; i++) {
            msg.reply(es[i])
        }
    }
    if (msg.content === ".es-1") {
        msg.reply(es[0])
    }
    if (msg.content === ".es-2") {
        msg.reply(es[1])
    }
    if (msg.content === ".es-3") {
        msg.reply(es[2])
    }
    if (msg.content === ".es-4") {
        msg.reply(es[3])
    }
    if (msg.content === ".es-5") {
        msg.reply(es[4])
    }

    // Statistics
    if (msg.content === ".stats") {
        for (i = 0; i < 5; i++) {
            msg.reply(stats[i])
        }
    }
    if (msg.content === ".stats-1") {
        msg.reply(stats[0])
    }
    if (msg.content === ".stats-2") {
        msg.reply(stats[1])
    }
    if (msg.content === ".stats-3") {
        msg.reply(stats[2])
    }
    if (msg.content === ".stats-4") {
        msg.reply(stats[3])
    }
    if (msg.content === ".stats-5") {
        msg.reply(stats[4])
    }

    // Software Enginnering
    if (msg.content === ".se") {
        for (i = 0; i < 5; i++) {
            msg.reply(se[i])
        }
    }
    if (msg.content === ".se-1") {
        msg.reply(se[0])
    }
    if (msg.content === ".se-2") {
        msg.reply(se[1])
    }
    if (msg.content === ".se-3") {
        msg.reply(se[2])
    }
    if (msg.content === ".se-4") {
        msg.reply(se[3])
    }
    if (msg.content === ".se-5") {
        msg.reply(se[4])
    }

    // Graphics
    if (msg.content === ".graphics") {
        for (i = 0; i < 5; i++) {
            msg.reply(graphics[i])
        }
    }
    if (msg.content === ".graphics-1") {
        msg.reply(graphics[0])
    }
    if (msg.content === ".graphics-2") {
        msg.reply(graphics[1])
    }
    if (msg.content === ".graphics-3") {
        msg.reply(graphics[2])
    }
    if (msg.content === ".graphics-4") {
        msg.reply(graphics[3])
    }
    if (msg.content === ".graphics-5") {
        msg.reply(graphics[4])
    }

})


bot.login(token);