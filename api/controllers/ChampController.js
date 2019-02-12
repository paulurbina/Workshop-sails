/**
 * ChampController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    get: function(req, res) {
        Champ.find()
                .then(function(champs) {
                    if(!champs || champs.length === 0) {
                        return res.json({
                            'success': false,
                            'message': 'no record found'
                        })
                    } else {
                        return res.send({
                            'success': true,
                            'message': 'records fetched',
                            'data': champs
                        })
                    }
                })
                .catch(function(err) {
                    sails.log.debug(err);
                    return res.send({
                        'success': false,
                        'message': 'errors',
                    })
                })
    },
    create: function(req, res) {
        sails.log.debug(req.allParams());
        Champ.create(req.allParams())
                .then(function(champs) {
                    return res.json({
                        "sucess": true,
                        "message": 'Record create succesfully'
                    })
                })
                .catch(function(err) {
                    sails.log.debug(err);
                    return res.send({
                        'success': false,
                        'message': 'Not record successfully'
                    })
                });
    },
    update: function(req, res) {
        sails.log.debug(req.param('id'));

        Champ.update(req.param('id'), req.allParams())
                .then(function(champ) {
                    return res.json({
                        'success': 'true',
                        'message': 'Record Update',
                        'data': champ
                    })
                })
                .catch(function(err) {
                    sails.log.debug(err)
                    return res.json({
                        'success': false,
                        'message': 'Unable to update data'
                    })
                })
    },
    delete: function(req, res) {
        Champ.destroy(req.param('id'))
                .then(function(champ) {
                    return res.send({
                        'success': true,
                        'message': 'Record deleted',
                        'data': champ
                    })
                })
                .catch(function(err) {
                    sails.log.debug(err);
                })
    }

};

