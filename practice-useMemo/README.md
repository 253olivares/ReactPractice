# React useMemo Practice

useMemo is a React function that is used to help prevent repeat data from repeating when its not needed for example sorting data when it hasnt been changes. In larger projects this can create performance issues where the function is running code that sorts data when teh data hasnt changed. useMemo lets us prevent these functions from running when our data hasnt change by setting it as a dependency.
