<?php

class GalleryController extends BaseController {
	/*
	| This function gets gallery images
	*/
	public function getGalleryImages($from, $to){

		$allFiles = File::allFiles('upload_dir');
		$countFiles = count($allFiles);

		if($countFiles != 0 and $from < $countFiles){
			$files = array_slice($allFiles, $from, $to);
			
			foreach ($files as $k=>$file) {
				$manuals = pathinfo($file);
				
				$images[] = array(
					'id' 	   	  => $from + 1,
					'src_path'    => $manuals['basename'],
					'img_visible' => true
				);

				$from++;
			}
		}
		else{
			$images = array(
					'id' 	   	  => 1,
					'src_path'    => '',
					'img_visible' => false
				);
		}

		return $images;
	}
	/*
	| This function removes gallery images
	*/
	public function removeGimg(){
		$img_path = strip_tags($_POST['img_path']);
		$deleteImage = File::delete('upload_dir/'.$img_path);
		
		if($deleteImage){
			return 'Image removed!';
		}else{
			return 'Oops! Could not remove';
		}
	}
}