
# react-customized

> Rewrite react with directives

Install from the [npm registry](https://www.npmjs.com/) with your package manager:
```bash
npm install react-customized
```
## Usage
Use with craco.
craco.config.json : 
```
    module.exports = {
        reactScriptsVersion: "react-scripts",
        babel: {
            presets: [
            [
                '@babel/preset-react',
                {
                    runtime: "automatic",
                    importSource: "react-customized",
                }
            ]
            ]
        }
    }
```

Now only one directive: r-if which means to mount the dom or not, similar to  `&&`  or  `? : ` 
```
    <div r-if={true}>这是一个描述1</div>
    <div r-if={false}>这是一个描述2</div>
```
```
    const show = false
    <div r-if={show}>这是一个描述3</div>
```

```
    import React, { useState } from 'react';
    const [showBtn, setShowBtn] = useState<boolean>(false);
    useEffect(() => {
        setShowBtn(true)
    }, [])
    return (
        <div r-if={showBtn}>这是一个描述4</div>
    )
```



