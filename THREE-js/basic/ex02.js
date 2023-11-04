import * as THREE from 'three';

    //------- 주제 : 기본장면
export default function example() {
    // Renderer

    //동적으로 캔버스 조정하기
    // const renderer = new THREE.WebGLRenderer();
    // renderer.setSize(window.innerWidth, window.innerHeight);
    // document.body.appendChild(renderer.domElement);

    const canvas = document.querySelector("#three-canvas");
    const renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true

    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    // console.log(window.devicePixelRatio);
    renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1 ); //비율값 고해상도 표현

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
        75, //fov 시야각
        window.innerWidth/window.innerHeight, //aspect 종횡비
        0.1, //near
        1000 //far
    );
    camera.position.x = 1;
    camera.position.y = 2;
    camera.position.z = 5;

    // // Orthographic Camera ( 직교 카메라 )
    // const camera = new THREE.OrthographicCamera(
    //     -(window.innerWidth / window.innerHeight), //left
    //     window.innerWidth / window.innerHeight,//right
    //     1, //top
    //     -1,//bottom
    //     0.1,
    //     1000
    // );
    // camera.position.x = 1;
    // camera.position.y = 2;
    // camera.position.z = 5;
    camera.lookAt(0, 0, 0);
    

    camera.updateProjectionMatrix();
    scene.add(camera);

    // Mesh
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({
        // color:0xff000
        // color:'#ff000'
        color: 'red'
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    //그리기
    renderer.render(scene, camera);

    function setSize(){
        //카메라
        camera.aspect = window.innerWidth/ window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.render(scene, camera);
    }

    //이벤트
    window.addEventListener('resize', setSize);
}