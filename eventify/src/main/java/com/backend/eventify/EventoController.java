package com.backend.eventify;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/eventos")
public class EventoController {
    private final EventoRepository eventoRepository;

    @Autowired
    public EventoController(EventoRepository eventoRepository) {
        this.eventoRepository = eventoRepository;
    }

    @PostMapping
    public ResponseEntity<Evento> cadastrarEvento(@RequestBody Evento evento) {
        Evento eventoSalvo = eventoRepository.save(evento);
        return new ResponseEntity<>(eventoSalvo, HttpStatus.CREATED);
    }

    @GetMapping
    public List<Evento> listarEventos() {
        return eventoRepository.findAll();
    }
}

