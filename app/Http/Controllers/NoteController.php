<?php

namespace App\Http\Controllers;

use App\Models\Label;
use App\Models\Note;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class NoteController extends Controller
{
    public function index()
    {
        return response(Note::all()) 
        ->header("Content-Type","application/json;  charset=utf-8");   
    }

    public function queryNoteByUserId(Request $request, string $userId)
    {
        $page = $request ->query('page');

        if (empty($page)) {
            return response(Note::where('user_id','=',$userId)->with('labels')->paginate());
        }

        $data = Note::where('user_id','=',$userId)->with('labels')
            ->paginate(15,['*'],'page',$page);

        return response(($data));
    }

    public function addNoteByUserId(Request $request, string $userId)
    {      
       try {
        if (!$request ->hasFile('md')) {
            return response(['没有上传文件附件']);
        }
        $text = $request ->file('md') ->getContent();
        $title = $request -> file('md') ->getClientOriginalName();  
        $type = $request -> input('type');      
        $labels = explode(",", $request->input('labels'));

        $note = new Note();

        $note ->user_id = $userId;
        $note ->text = $text;
        $note ->title = $title;
        $note ->type = $type;

        if ($note->save()) {
            foreach ($labels as $labelData) {
                $label = new Label();
                $label ->content = $labelData;
                $label ->note_id = $note ->id;
                $label -> save();
            }
            return response(["success"]);
        }
        return response(["error"]);
       } catch (\Throwable $th) {
        return response([$th->getMessage()]);
       }
    }

    public function deleteNoteByNoteId(string $noteId)
    {   
        $note = Note::find((int) $noteId);

        if ($note) {
            $note ->delete();
            return response(['success']);
        }

        return response(['fail']);
    }

    public function queryAllNoteWholeByUserId(string $userId)
    {
        try {
            return response(Note::where('user_id','=',(int)$userId)->select("title","id",DB::raw('LEFT(text, 100) as text_summary'))->with('labels')->get());
        } catch (\Throwable $th) {
            return response([$th->getMessage()]);
        }
    }
}
