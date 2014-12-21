#pragma strict

function Start () {

}

//Limits camera boundaries
function Update () {
	var xMove : float = Input.GetAxis("Horizontal") * Time.deltaTime;
	transform.Translate(Vector3(xMove, 0, 0));
	
	transform.position.x = Mathf.Clamp(transform.position.x, -120, 120);
} 