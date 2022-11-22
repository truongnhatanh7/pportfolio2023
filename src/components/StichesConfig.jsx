import { getCssText, globalStyle } from "../design/stitches.config"


const StitchesConfig = () => {
  globalStyle();
  return (<>
    <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
  </>)
}

export default StitchesConfig;