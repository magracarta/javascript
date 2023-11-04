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
        antialias: true,
        // alpha: true
    });
 
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1 ); //비율값 고해상도 표현
    // renderer.setClearAlpha(0.5); //투명도 조정

    // renderer.setClearColor('0x00ff00');
    // renderer.setClearAlpha(0.5);

    // Scene
    const scene = new THREE.Scene();
    // scene.background = new THREE.Color('blue');

    // Camera
    const camera = new THREE.PerspectiveCamera(
        75, //fov 시야각
        window.innerWidth/window.innerHeight, //aspect 종횡비
        0.1, //near
        1000 //far
    );
    // camera.position.x = 2;
    // camera.position.y = 2;
    camera.position.z = 5;


    camera.lookAt(0, 0, 0);
    
    scene.add(camera);
    
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.x = 1;
    light.position.z = 2;
    scene.add(light);

    // Mesh
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({
        // color:0xff000
        // color:'#ff000'
        color: 'red'
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    //그리기
    let oldTime = Date.now();
    
    function draw(){
        const newTime = Date.now();
        const deltaTime = newTime - oldTime;
        oldTime = newTime;
        // 각도는 Radian 을 사용
        // 360도는 2파이
        // mesh.rotation.y += 0.1;
        // mesh.rotation.y += THREE.MathUtils.degToRad(time);
        mesh.rotation.y += 2 * deltaTime * 0.001;
        mesh.position.y += deltaTime * 0.001;
        if(mesh.position.y > 3){
            mesh.position.y=0;
        }
        renderer.render(scene, camera);

        // requestAnimationFrame(draw);
        renderer.setAnimationLoop(draw);
    }

    function setSize(){
        //카메라
        camera.aspect = window.innerWidth/ window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.render(scene, camera);
    }

    //이벤트
    window.addEventListener('resize', setSize);
    draw();
}