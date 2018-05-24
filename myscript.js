walk(document.body);

function walk(node)  
{
	
	"use strict";
	var child, next;

	switch ( node.nodeType )  
	{
		case 1: 
		case 9:  
		case 11: 
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling; 
				walk(child);
				child = next;
			}
			break;

		case 3: 
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	"use strict";
	var v = textNode.nodeValue;
	
	v = v.replace(/Is depressed/g, "has depression");
	v = v.replace(/Is Depressed/g, "Has depression");
	v = v.replace(/is Depressed/g, "has depression");
	v = v.replace(/is Depressed/g, "has depression");
	
	v = v.replace(/is ADHD/g, "has ADHD");
	v = v.replace(/Is ADHD/g, "has ADHD");
	v = v.replace(/is adhd/g, "has ADHD");
	v = v.replace(/is A.D.H.D/g, "has ADHD");
	
	v = v.replace(/Is mentally handicapped/g, "has a mental disability");
	v = v.replace(/Is Mentally Handicapped/g, "has a mental disability");
	v = v.replace(/Is Mentally handicapped/g, "has a mental disability");
	v = v.replace(/is mentally handicapped/g, "has a mental disability");
	v = v.replace(/is Mentally Handicapped/g, "has a mental disability");
	v = v.replace(/is Mentally handicapped/g, "has a mental disability");
	
	v = v.replace(/Is physically handicapped/g, "has a physicall disability");
	v = v.replace(/Is Physically handicapped/g, "has a physicall disability");
	v = v.replace(/Is Physically Handicapped/g, "has a physicall disability");
	v = v.replace(/is physically handicapped/g, "has a physicall disability");
	v = v.replace(/is Physically Handicapped/g, "has a physicall disability");
	
	v = v.replace(/Is Obsessive-Compulsive/g, "Has obsessive-compulsive disorder");
	v = v.replace(/is obsessive-compulsive/g, "has obsessive-compulsive disorder");
	v = v.replace(/Is OCD/g, "Has obsessive-compulsive disorder");
	v = v.replace(/is ocd/g, "has obsessive-compulsive disorder");
	v = v.replace(/Is Obsessive Compulsive/g, "has obsessive-compulsive disorder");
	v = v.replace(/is obsessive compulsive/g, "has obsessive-compulsive disorder");
	
	v = v.replace(/Is Bipolar/g, "Has Bipolar Disorder");
	v = v.replace(/is bipolar/g, "has bipolar disorder");
	v = v.replace(/is Bipolar/g, "has bipolar disorder");
	
	v = v.replace(/Is Schizophrenic/g, "Has schizophrenic");
	v = v.replace(/is schizophrenic/g, "has schizophrenic");
	v = v.replace(/Is schizo/g, "Has schizophrenic");
	v = v.replace(/is schizo/g, "has schizophrenic");
	v = v.replace(/is Schizo/g, "has schizophrenic");
	v = v.replace(/Is Schizo/g, "Has schizophrenic");
	
	v = v.replace(/is autistic/g, "has autism");
	v = v.replace(/Is Autistic/g, "Has autism");
	
	v = v.replace(/Is mentally disabled/g, "has a mental disability");
	v = v.replace(/Is Mentally Disabled/g, "has a mental disability");
	v = v.replace(/Is Mentally disabled/g, "has a mental disability");
	v = v.replace(/is mentally disabled/g, "has a mental disability");
	v = v.replace(/is Mentally Disabled/g, "has a mental disability");
	v = v.replace(/is Mentally disabled/g, "has a mental disability");
	
	v = v.replace(/Is physically disabled/g, "has a physicall disability");
	v = v.replace(/Is Physically disabled/g, "has a physicall disability");
	v = v.replace(/Is Physically Disabled/g, "has a physicall disability");
	v = v.replace(/is physically disabled/g, "has a physicall disability");
	v = v.replace(/is Physically Disabled/g, "has a physicall disability");
	v = v.replace(/is physically Disabled/g, "has a physicall disability");
	
	v = v.replace(/is Demented/g, "has dementia");
	v = v.replace(/is demented/g, "has dementia");
	v = v.replace(/Is Demented/g, "Has dementia");
	v = v.replace(/Is demented/g, "Has dementia");
	
	v = v.replace(/Is Retarded/g, "Is misunderstood");
	v = v.replace(/Is retarded/g, "Is misunderstood");
	v = v.replace(/is Retarded/g, "is misunderstood");
	v = v.replace(/is retarded/g, "is misunderstood");
	
	v = v.replace(/Is mental/g, "Is unconventional");
	v = v.replace(/Is Mental/g, "Is unconventional");
	v = v.replace(/is mental/g, "is mental");
	v = v.replace(/is Mental/g, "is Mental");
	
	v = v.replace(/is spastic/g, "is spontaneous");
	v = v.replace(/is Spastic/g, "is spontaneous");
	v = v.replace(/Is spastic/g, "Is spastic");
	v = v.replace(/Is Spastic/g, "Is spontaneous");
	
	v = v.replace(/is a freak/g, "is an individual");
	v = v.replace(/Is a freak/g, "is an individual");
	v = v.replace(/Is A Freak/g, "Is an individual");
	v = v.replace(/Is a freak/g, "Is an individual");
	v = v.replace(/is a FREAK/g, "is an individual");
	
	v = v.replace(/Is Psychotic/g, "Is Passionate");
	v = v.replace(/is psychotic/g, "is passionate");
	v = v.replace(/Is psychotic/g, "Is psychotic");
	
	v = v.replace(/Is Unstable/g, "Is offbeat");
	v = v.replace(/Is unstable/g, "Is offbeat");
	v = v.replace(/is unstable/g, "is unstable");
	v = v.replace(/is Unstable/g, "is offbeat");
	
	v = v.replace(/the blind/g, "people who are blind");
	v = v.replace(/The Blind/g, "people who are blind");
	v = v.replace(/The blind/g, "people who are blind");
	v = v.replace(/the Blind/g, "people who are blind");
	
	v = v.replace(/special ed student/g, "student who receives special education services");
	v = v.replace(/Special ed student/g, "student who revieves special education services");
	v = v.replace(/Special Ed Student/g, "student who receives special education services");
	v = v.replace(/Special Ed student/g, "student who reveives special education services");
	v = v.replace(/Special ed student/g, "student who recives special education services");
	v = v.replace(/special ed student/g, "student who recives special educaiton services");
				  
	
				  
	textNode.nodeValue = v;
}
