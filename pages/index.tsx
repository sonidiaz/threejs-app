import { useEffect, useReducer, useState } from "react"
import { 
    Scene,
    WebGL1Renderer,
    PerspectiveCamera,
    Mesh,
    MeshBasicMaterial,
    BoxGeometry,
    SpotLight,
    CubeTextureLoader,
    CubeReflectionMapping,
    MeshPhysicalMaterial,
    DirectionalLight,
    AmbientLight,
} from "three"
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'


function HomePage() {
    const [snapshot, setsnapshot] = useState('')
    const [renderState, setrenderState] = useState<any>()
    const scene = new Scene()

    useEffect(() => {
        
        const renderer =  new WebGL1Renderer({
            antialias: true,
            preserveDrawingBuffer: true,
            canvas: document.getElementById("bg")
        })
        setrenderState(renderer)

        const camara = new PerspectiveCamera(
            71, 
            500 /  500,
            0.1,
            1000
        )

        const light = new AmbientLight(0xffffff, 1)
        light.position.set(20, 20, 5)
        scene.add(light)
        
        const controls = new OrbitControls(camara, renderer.domElement)
        controls.enableDamping = true
        controls.addEventListener('end', (e) => {
            setrenderState(renderer)

        })
        // mover camara
        camara.position.z = 6

        
        const envTexture = new CubeTextureLoader().load([
            'render/custom-sky.png',
        ])
        envTexture.mapping = CubeReflectionMapping
        
        const material = new MeshPhysicalMaterial({
            color: 0xfffffff,
            roughness: 0.5,
            metalness: 0.5,
            clearcoat: 0.5,
            clearcoatRoughness: 0.5
        });
        renderer.setSize(500, 500)

        const loader = new STLLoader()
        loader.load(
            '/render/example.stl',
            function (geometry) {
                const mesh = new Mesh(geometry, material)
                geometry.rotateX(90)
                geometry.rotateY(90)
                scene.add(mesh)
            },
            (xhr) => {
                console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
            },
            (error) => {
                console.log(error)
            }
        )

        function animate() {
            renderer.render(scene, camara)
            requestAnimationFrame(animate)
            controls.update()
        }
        animate()
    }, [])

    const handleSave = () => {
        let imgData, imgNode;
        var strDownloadMime = "image/octet-stream";

        try {
            var strMime = "image/jpeg";
            imgData = renderState.domElement.toDataURL(strMime);
            console.log(renderState);
            setsnapshot(imgData.replace(strMime, strDownloadMime))

        } catch (e) {
            console.log(e);
            return;
        }
    }

    return (
        <>
            <div className="wrapper-canvas">
                <canvas id="bg" />
                <img src={snapshot} alt="" />
            </div>
            <button className="saveFrame" onClick={() => {
                handleSave()
            }}>Save</button>
        </>
    )
}


export default HomePage