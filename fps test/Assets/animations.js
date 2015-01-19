#pragma strict
internal var animator : Animator;
internal var cc : CharacterController;
var h : float;
var v : float;
var sprint : float;
var slide : boolean;
var sprintjumping : boolean;
var Climb : boolean;


function Start () 
{
animator = GetComponent(Animator);
cc = GetComponent(CharacterController);

}

function Update () 
{
v = Input.GetAxis("Vertical");
h = Input.GetAxis("Horizontal");
if (Input.GetKey(KeyCode.LeftShift))
 {
sprint = 0.2;
 }
else
 {	
sprint = 0.0;
 }


// slide
if (Input.GetKey(KeyCode.LeftShift)&& Input.GetKeyDown(KeyCode.LeftControl))
	{
slide = true;

	}
else
	{
slide = false;

	}

// sprint jump
if (Input.GetKey(KeyCode.LeftShift)&& Input.GetKeyDown(KeyCode.Space))
	{
sprintjumping = true;
	}
else
	{
sprintjumping = false;
	}
	
// climb / jump
if (Input.GetKeyDown(KeyCode.Space))
	{
Climb = true;
	}
else
	{
Climb = false;
	}	
	
animator.SetFloat("Walk", v);
animator.SetFloat("Turn", h);
animator.SetFloat("Sprint", sprint);
animator.SetBool("slide", slide);
animator.SetBool("sprintjumping", sprintjumping);
animator.SetBool("Climb", Climb);

}



