import { useEffect, useRef } from "react";

function UnityContainer() {
  const unityRef = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/unity/Build/bb0d9ecdb05db3e84da20bd14a4f84dc.loader.js"; // đổi tên theo project bạn
    script.onload = () => {
      createUnityInstance(unityRef.current, {
        dataUrl: "/unity/Build/a71d6bfd8efc22364fb616f169ca1865.data",
        frameworkUrl: "/unity/Build/b07dd2286981fb93474eca96f4dbbfea.framework.js",
        codeUrl: "/unity/92d79d7d0ad02c425a0899bb4cf941da.wasm",
      }).then((instance) => {
        console.log("Unity loaded", instance);
      });
    };
    document.body.appendChild(script);
  }, []);

  return <div ref={unityRef} style={{ width: "100%", height: "100vh" }} />;
}

export default UnityContainer;
