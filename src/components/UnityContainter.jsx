import { useEffect, useRef } from "react";

function UnityContainer() {
  const unityRef = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/unity/Build/myproject.loader.js"; // đổi tên theo project bạn
    script.onload = () => {
      createUnityInstance(unityRef.current, {
        dataUrl: "/unity/Build/myproject.data",
        frameworkUrl: "/unity/Build/myproject.framework.js",
        codeUrl: "/unity/Build/myproject.wasm",
      }).then((instance) => {
        console.log("Unity loaded", instance);
      });
    };
    document.body.appendChild(script);
  }, []);

  return <div ref={unityRef} style={{ width: "100%", height: "100vh" }} />;
}

export default UnityContainer;
